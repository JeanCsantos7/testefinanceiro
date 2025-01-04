import mysql from 'mysql2/promise'; // Importa a versão com suporte a Promises
import dotenv from 'dotenv';

dotenv.config();

// Cria o pool de conexões com as melhores práticas
const pool = mysql.createPool({
    host: process.env.MYSQLHOST || 'localhost',
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD || 'Sccp1910',
    database: process.env.MYSQLDATABASE || 'bd_controlegastos',
    port: Number(process.env.MYSQLPORT),
    waitForConnections: true,
    connectionLimit: 20,
    queueLimit: 0,
    connectTimeout: 50000, // Timeout de 10 segundos para conexões
});

// Testa a conexão inicial com async/await
(async () => {
    try {
        const connection = await pool.getConnection(); // Solicita uma conexão
        console.log('Conexão ao MySQL bem-sucedida');
        connection.release(); // Libera a conexão de volta para o pool
    } catch (error) {
        console.error('Erro ao conectar ao MySQL:', error);
    }
})();

export default pool;
