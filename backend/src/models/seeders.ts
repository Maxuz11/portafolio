import { Comuna, Municipalidad } from "./mer";


export class Seeders{

    //**datos a insertar */
    dataComuna = [
        { nombre: 'Puente Alto' },
        { nombre: 'La Florida' },
        { nombre: 'Maipu' },
        { nombre: 'San Ramon' },
        { nombre: 'Macul' },
    ];

    dataMunicipalidad = [
        {  nombre: 'Municipalidad Puente Alto', fk_id_comuna: 1 },
        {  nombre: 'Municipalidad La Florida', fk_id_comuna: 2 },
        {  nombre: 'Municipalidad Maipu', fk_id_comuna: 3 },
    ];  
    //**promise que inserta los datos de inicio en las tablas comunas y municipalidad. */
    insertSeeders = async () => {
    try {
      // Verificar si la tabla Comuna contiene datos.
      const comunaCount = await Comuna.count();

      if (comunaCount > 0) {
        console.log(`La tabla Comuna ya contiene ${comunaCount} registros.`);
      } else {
        // Insertar datos en la tabla Comuna.
        await Comuna.bulkCreate(this.dataComuna);
        console.log('Se han insertado los datos correctamente en la tabla Comuna.');
      }
  
      // Verificar si la tabla Municipalidad contiene datos.
      const municipalidadCount = await Municipalidad.count();

      if (municipalidadCount > 0) {
        console.log(`La tabla Municipalidad ya contiene ${municipalidadCount} registros.`);
      } else {
        // Insertar datos en la tabla Municipalidad.
        await Municipalidad.bulkCreate(this.dataMunicipalidad);
        console.log('Se han insertado los datos correctamente en la tabla Municipalidad.');
      }
    } catch (error) {
      console.error('Error al insertar los datos:', error);
    }
  };
}
