import { Request, Response } from 'express';
import { JuntaVecinal, RepresentanteVecinal } from '../models/mer';

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
            //agregamos enseguida el 1er rep con los datos de la creacion anterior 
            const idJuntaVecinal = JuntaVecinal.findOne({attributes: ['id_junta_vecinal'],where: {rut_junta: data.rut_junta}});
            const RepVec =  await RepresentanteVecinal.create({ 
                rut_representante: data.rut_representante,
                primer_nombre: data.primer_nombre,
                segundo_nombre: data.segundo_nombre,
                primer_apellido: data.primer_apellido,
                segundo_apellido: data.segundo_apellido,
                comuna_rep: data.comuna_rep,
                direccion: data.direccion, 
                numero: data.numero,
                correo_electronico: data.correo_electronico, 
                telefono: data.telefono, 
                contrasenia: data.contrasenia, 
                avatar: data.avatar,
                ruta_evidencia: data.ruta_evidencia, 
                ruta_firma: data.ruta_firma, 
                fk_id_junta_vecinal: idJuntaVecinal        
            },
            );
            console.log('ok')

        }
    } catch( error ) {
        console.error('Error al insertar los datos en la tabla junta_vecinal:', error);

    }
}; 
   
