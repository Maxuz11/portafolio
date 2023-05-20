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

export interface RepresentanteVecinal {
  rut_representante: string,
  primer_nombre: string,
  segundo_nombre: String,
  primer_apellido: String,
  segundo_apellido: String,
  direccion_rep: String,
  numero_rep: Number,
  correo_electronico: String,
  telefono: Number;
  contrasenia: String,
  comuna_rep: Number,
  avatar:string,
  ruta_evidencia: string,
  ruta_firma: string,
  id_junta_vecinal: Number
}