import { DataTypes } from "sequelize";
import sequelize from "../db/connection";


export const Comuna = sequelize.define('comuna', {
    id_comuna: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    },
    {
        // Evita que se cree los campos createdAt y updatedAt que sequelize crea por defecto
        //y son de tablas de tiempo de creacion y actualizacion
        createdAt: false,
        timestamps: false,
        tableName: 'comuna'
});

// export const Municipalidad = sequelize.define('municipalidad', {
//     id_municipalidad: { 
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     nombre: {
//         type: DataTypes.STRING(50),
//         unique: true,
//         allowNull: false,
//     },
//     },
//     {
//         createdAt: false,
//         timestamps: false,
//         tableName: 'municipalidad'
// });

export const JuntaVecinal = sequelize.define('JuntaVecinal', {
    id_junta_vecinal: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    razon_social: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    direccion:{
        type: DataTypes.STRING(50),
        unique: false,
        allowNull: false,
    },
    numero_calle: {
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: false,
    },   
    rut_junta: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    fk_id_comuna:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
   
    },
    { 
    createdAt: false,
    timestamps: false,
    tableName: 'junta_vecinal'
});
JuntaVecinal.belongsTo(Comuna, { foreignKey: 'fk_id_comuna' });

export const Proyecto = sequelize.define('Proyecto', {
    id_proyecto: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING(200),
        unique: true,
        allowNull: true,
    },
    cupo_min: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    cupo_max: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    estado: {
        type: DataTypes.STRING(15),
        allowNull: true,
    },
    ruta_imagen: {
        type: DataTypes.STRING(70),
        allowNull: false,
    },
    fecha_proyecto: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
    },
{
    createdAt: false,
    timestamps: false,
    tableName: 'proyecto'
});

export const Reporte = sequelize.define('Reporte', {
    id_reporte: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rut_vecino: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    },
    {
        createdAt: false,
        timestamps: false,
        tableName: 'reporte'
});

export const RepresentanteVecinal = sequelize.define('RepresentanteVecinal', {
    id_representante_vecinal: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rut_representante: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    primer_nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    segundo_nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    primer_apellido: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    segundo_apellido: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    comuna_rep:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    numero:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    correo_electronico: {
        type: DataTypes.STRING(60),
       // unique: true,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    contrasenia: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //     isFiveDigits(value: Number) {
        //       if (value.toString().length !== 5) {
        //         throw new Error('La contraseña debe tener 5 dígitos');
        //       }
        //     }
        // }
    },
    avatar:{
        type: DataTypes.STRING(70),
        allowNull: false,
    },
    ruta_evidencia: {
        type: DataTypes.STRING(70),
        allowNull: true,
    },
    ruta_firma: {
        type: DataTypes.STRING(70),
        allowNull: true
    },
    fk_id_junta_vecinal:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    },
    {
        createdAt: false,
        timestamps: false,
        tableName: 'representante_vecinal'
});
RepresentanteVecinal.belongsTo(JuntaVecinal, { foreignKey: 'fk_id_junta_vecinal' });

export const Actividad = sequelize.define('Actividad', {
    id_actividad: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    ruta_imagen: {
        type: DataTypes.STRING(70),
        allowNull: false,
    },
    fecha_actividad: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
    },
{
    createdAt: false,
    timestamps: false,
    tableName: 'actividad'
});

export const Vecino = sequelize.define('Vecino', {
    id_vecino: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rut_vecino: {
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: false,
    },
    primer_nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    segundo_nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    primer_apellido: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    segundo_apellido: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    correo_electronico: {
        type: DataTypes.STRING(60),
        unique: true,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING(12),
        unique: true,
        allowNull: true,
    },
    contrasenia: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        validate: {
            isFiveDigits(value: Number) {
              if (value.toString().length !== 5) {
                throw new Error('La contraseña debe tener 5 dígitos');
              }
            }
        }
    },
    },
    {
        createdAt: false,
        timestamps: false,
        tableName: 'vecino'
});

export const Certificado = sequelize.define('Certificado', {
    id_certificado: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    },
{
    createdAt: false,
    timestamps: false,
    tableName: 'certificado'
});

export const Solicitud = sequelize.define('Solicitud', {
    id_solicitud: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo_solicitud: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: true,
    },
    descripcion: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    estado_solicitud: {
        type: DataTypes.STRING(15),
        unique: false,
        allowNull: false,
    },
    },
{
    createdAt: false,
    timestamps: false,
    tableName: 'solicitud'
});

export const Valoracion = sequelize.define('Valoracion', {
    id_valoracion: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comentario: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    cantidad_estrellas: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    estado_solicitud: {
        type: DataTypes.STRING(15),
        unique: false,
        allowNull: false,
    },
    },
{
    createdAt: false,
    timestamps: false,
    tableName: 'valoracion'
});

// export const User = sequelize.define('User',{
//     rut_user: {
//         type: DataTypes.STRING(13),
//         allowNull: false
//     },
//     contrasenia:{
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     }, 
//     {
//         createdAt: false,
//         timestamps: false
// });