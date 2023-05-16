import { Request, Response } from 'express';
import { JuntaVecinal } from '../models/mer';

export const insertJuntaVecinal = async (req: Request, res: Response) => {
    const data = req.body;

    const existeJuntaVecinal = await JuntaVecinal.findOne({where: {nombre: data.nombre}});

    if (existeJuntaVecinal){
        return res.status(400).json({
            msg: `La junta vecinal ya se encuentra registrada.`
        })
    }else{

        try{

            if(data.length > 0){
                /**inserción de datos */
                await JuntaVecinal.bulkCreate(data);

                console.log('Se han insertado los datos correctamente en la tabla Comuna.');
            }else{
                console.log(`No existen datos para insertar en la tabla junta_vecinal`)
            }
            
        }catch(error){
            console.error('Error al insertar los datos en la tabla junta_vecinal:', error);

        }
    }
   
};