export interface Municipalidad{
   id_municipalidad: number;
  nombre: string;
};


export interface comuna{
    id_comuna: number;
    nombre: string;
};

export interface JuntaVecinal {
  id_comuna: number;
  razon_social: string;
  direccion: string;
  numero_calle: number;
  rut_junta: string;
}

export interface REPRESENTANTE_VECINAL {
  RUT_REPRESENTANTE: string,
  PRIMER_NOMBRE: string,
  SEGUNDO_NOMBRE: String,
  PRIMER_APELLIDO: String,
  SEGUNDO_APELLIDO: String,
  COMUNA: Number,
  DIRECCION: String,
  NUMERO: Number,
  CORREO_ELECTRONICO: String,
  TELEFONO: String;
  CONTRASENIA: String
}