import Knex from 'knex';

export async function up(knex: Knex){ //operações que serão feitas no BD
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary(); //vai incrementando 
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE') //altera em todos os lugares q precisam alterar
            .onDelete('CASCADE'); //deleta todas as aulas do professor
    })
}

export async function down(knex: Knex){ //para remover se der algum problema
    return knex.schema.dropTable('classes');
}