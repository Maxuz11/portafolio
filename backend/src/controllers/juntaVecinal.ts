import { Request, Response } from 'express';
import { JuntaVecinal } from '../models/mer';

export const insertJuntaVecinal = async (req: Request, res: Response) => {
    const data = req.body;    
    try {
        const existeJuntaVecinal =  await JuntaVecinal.findOne({where: {razon_social: data.razon_social}});
        if (existeJuntaVecinal !== null){
            return res.status(400).json({
                msg: `La junta vecinal ya se encuentra registrada.`
            })
        }
        else {
           const juntaVEcinal =  await JuntaVecinal.create({ 
                razon_social: data.razon_social,
                direccion: data.direccion,
                numero_calle: data.numero_calle,
                rut_junta: data.rut_junta,
                fk_id_comuna: data.id_comuna
            },
            );
            console.log("ok");
        }
    } catch( error ) {
        console.error('Error al insertar los datos en la tabla junta_vecinal:', error);

    }
}; 
   
