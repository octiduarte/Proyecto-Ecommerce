import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost', // Cambia esto por tu host de MySQL
  user: 'tu_usuario', // Cambia esto por tu usuario de MySQL
  password: 'tu_contraseña', // Cambia esto por tu contraseña de MySQL
  database: 'nombre_de_tu_base_de_datos', // Cambia esto por el nombre de tu base de datos
});