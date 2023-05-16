import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { usuario } from '../models/user';
import jwt from 'jsonwebtoken';

// es una funcion asincrona que recibe el request y el response de express
//metodo para registrar un usuario
//tiene que ser async por que tiene que esperar respuesta de base de datos y por que tenemos un await
export const newUsuario = async (req: Request, res: Response) => {
    //trayendo los datos del body
    const{correo,contrasena} = req.body;
    //validar que el correo exista
    const existeCorreo = await usuario.findOne({where:{correo: correo}});
    if (existeCorreo) {
        return res.status(400).json({
            msg: `Ya existe el corre ${correo}`
        })
    }
    //contraseña encriptada
    const hashpasword = await bcrypt.hash(contrasena, 10);

   //creando el usuario
   try {
    await usuario.create({ 
        //creamos la tabla con los datos que se van a enviar
        correo: correo,
        contrasena: hashpasword
    })
    res.json({
        msg: `correo ${correo} registrado exitosamente!`,
    })
    
   } catch (error) {
    res.status(400).json({
        msg: 'Error al registrar usuario',
    })
    
   }

};
//metodo para logearse
export const login = async (req: Request, res: Response) => {
    const{correo,contrasena} = req.body;
    //validar que el correo exista
    const existeCorreo:any = await usuario.findOne({where:{correo: correo}});
    //si no existe el correo
    if (!existeCorreo) {
        return res.status(400).json({
            msg: `No existe el correo ${correo}, debe registrarse`
        })
    }
    //validar password
    const validPassword = await bcrypt.compare(contrasena, existeCorreo.contrasena);
    if(!validPassword){
        return res.status(400).json({
            msg: 'contraseña no valida'
        })
    }
    //generar el token devolviedo el correo
    const token = jwt.sign({
      correo: correo,
    },process.env.SECRET_KEY || "secretkey"); // se le puede agregar que espere 1 hora para que expire {expiresIn: 60 * 60}
     res.json(token);
};




