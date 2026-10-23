require('dotenv').config();

console.log(process.env)

module.exports = {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'postgres',
    define: {
        timestamp: true
    },
    dialectOptions: {
        timezone: 'America/Sao_Paulo'
    },
    timezone: 'America/Sao_Paulo'
}

// require('dotenv').config();

// console.log(process.env)

// module.exports = {
//     dialect: 'postgres',
//     host: "127.0.0.1",
//     port: 5432,
//     username: "postgres",
//     password: "1234",
//     database: 'postgres',
//     define: {
//         timestamp: true
//     },
//     dialectOptions: {
//         timezone: 'America/Sao_Paulo'
//     },
//     timezone: 'America/Sao_Paulo'
// }
