import Knex from 'knex';

export async function up(knex: Knex){ //operações que serão feitas no BD
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();
        
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE') //altera em todos os lugares q precisam alterar
            .onDelete('CASCADE'); //deleta todas as aulas do professor

        table.timestamp('created_at') //quando aconteceu
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    })
}

export async function down(knex: Knex){ //para remover se der algum problema
    return knex.schema.dropTable('connections');
}