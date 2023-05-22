export interface Municipalidad{
   id_municipalidad: number;
  nombre: string;
};


export interface comuna{
    id_comuna: number;
    nombre: string;
};

export interface JuntaVecinal {  
  razon_social: string;
  direccion: string;
  numero_calle: number;
  rut_junta: string;
  id_comuna: number;
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
export interface Login{
  rut_representante: string,
  contrasenia: string
}

export interface JuntaVecinal2 {
  id_junta_vecinal: number;
  razon_social: string;
};

export interface Vecino {
  rut_vecino: string,
  primer_nombre: string,
  segundo_nombre: String,
  primer_apellido: String,
  segundo_apellido: String,
  direccion: String,
  correo_electronico: String,
  telefono: Number;
  contrasenia: String,
  avatar:string,
  ruta_evidencia: string,
  fk_id_junta_vecinal: Number,
};
