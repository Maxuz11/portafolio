import { Request, Response } from "express";
import { Vecino } from "../models/mer";


export const insertvecino = async (req: Request, res: Response) => {
    const { rut_vecino, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, direccion,correo_electronico, telefono,contrasenia,avatar,ruta_evidencia,fk_id_junta_vecinal } = req.body;
    try {
        const vecino = await Vecino.create({
            rut_vecino,
            primer_nombre,
            segundo_nombre,
            primer_apellido,
            segundo_apellido,
            direccion,
            correo_electronico,
            telefono,
            contrasenia,
            avatar,
            ruta_evidencia,
            fk_id_junta_vecinal 

        });
      
        return res.json({
            msg: 'Se inserto correctamente',
            vecino
        
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error al insertar el vecino'
        });
    }
}