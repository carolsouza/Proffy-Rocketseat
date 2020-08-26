import knex from 'knex'
import 'dotenv/config'

// migrations - controlam a versão do banco de dados

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
		user: 'postgres',
		password: 'docker',
		database: 'proffy',
    },
    useNullAsDefault: true, //valor padrão para o sql: null
})

export default db;