export const queries = {
    //**query que comprueba la existencia de tablas en el esquema. */
    existsTables: `SELECT table_name FROM all_tables WHERE owner = 'C##JUNTA_VECINAL';`,
    
}
