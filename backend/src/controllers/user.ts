import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { RepresentanteVecinal } from '../models/mer';

//login

export const login = async (req :Request, res : Response)=>{
    console.log('llega')
    const cuerpo = req.body;
    console.log(cuerpo)
    var respuesta = '';
    var rol = '';
    // const existeUser = await User.findOne({where:{contrasenia: cuerpo.rut_user}});
 
    try{
        // le indicamos a la const de tipo any, ya qpor defecto el atributop q devuelva sera un strg y entrara en conflicto con lo q espera bycript y el modelo del mer
        const EsRepre: any = await RepresentanteVecinal.findOne({attributes: ['contrasenia'],where:{rut_representante: cuerpo.rut_representante}});
        
        if(EsRepre !== null){
           // const EsVecino = await Vecino.findOne({attributes: ['rut_vecino','contrasenia'],where:{rut_vecino: cuerpo.rut_user}});
            // if(!EsVecino){
            //     return;
            // }
            // respuesta = 'Es vecino';
            // return respuesta;
            
            respuesta = 'representante';
            const validPassword = await bcrypt.compare(cuerpo.contrasenia,EsRepre.contrasenia);
            if(validPassword === true){
                const token = jwt.sign({
                    rut_representante: cuerpo.rut_representante,
                        },process.env.SECRET_KEY || "secretkey"); // se le puede agregar que espere 1 hora para que expire {expiresIn: 60 * 60}
                const alo = [] = [respuesta,token];
                
                return res.json({alo});
            }
            else{
                const alo = [] = [respuesta,'clave invalida'];
                return res.json({alo});
            }
            
        }
        else{            
        respuesta = 'no existe usario';
        return res.json({respuesta});
        }
        // else{    
        //     console.log(respuesta)
        //     respuesta = 'Es representante';
        //     const validPassword = await bcrypt.compare(cuerpo.contrasenia,EsRepre.contrasenia);
        //     if(validPassword === true){
        //         const alo = [] = [respuesta,'RepVec'];
        //         return alo;
        //     }
        //     else{
        //         const alo = [] = [respuesta,'clave invalida'];
        //         return alo;
        //     }
            
        // }
    }
    catch{
        console.log(respuesta)
        respuesta = 'no existe usario';
        return res.json({respuesta});
    }
    
};



// // // es una funcion asincrona que recibe el request y el response de express
// // //metodo para registrar un usuario
// // //tiene que ser async por que tiene que esperar respuesta de base de datos y por que tenemos un await
// // export const newUsuario = async (req: Request, res: Response) => {
// //     //trayendo los datos del body
// //     const{correo,contrasena} = req.body;
// //     //validar que el correo exista
// //     const existeCorreo = await usuario.findOne({where:{correo: correo}});
// //     if (existeCorreo) {
// //         return res.status(400).json({
// //             msg: `Ya existe el corre ${correo}`
// //         })
// //     }
// //     //contraseña encriptada
// //     const hashpasword = await bcrypt.hash(contrasena, 10);

// //    //creando el usuario
// //    try {
// //     await usuario.create({ 
// //         //creamos la tabla con los datos que se van a enviar
// //         correo: correo,
// //         contrasena: hashpasword
// //     })
// //     res.json({
// //         msg: `correo ${correo} registrado exitosamente!`,
// //     })
    
// //    } catch (error) {
// //     res.status(400).json({
// //         msg: 'Error al registrar usuario',
// //     })
    
// //    }

// // };
// // //metodo para logearse
// // export const login = async (req: Request, res: Response) => {
// //     const{correo,contrasena} = req.body;
// //     //validar que el correo exista
// //     const existeCorreo:any = await usuario.findOne({where:{correo: correo}});
// //     //si no existe el correo
// //     if (!existeCorreo) {
// //         return res.status(400).json({
// //             msg: `No existe el correo ${correo}, debe registrarse`
// //         })
// //     }
// //     //validar password  bcrypt.compare(myPlaintextPassword, hash)
// //     const validPassword = await bcrypt.compare(contrasena, existeCorreo.contrasena);
// //     if(!validPassword){
// //         return res.status(400).json({
// //             msg: 'contraseña no valida'
// //         })
// //     }
// //     //generar el token devolviedo el correo
// //     const token = jwt.sign({
// //       correo: correo,
// //     },process.env.SECRET_KEY || "secretkey"); // se le puede agregar que espere 1 hora para que expire {expiresIn: 60 * 60}
// //      res.json(token);
// // };




