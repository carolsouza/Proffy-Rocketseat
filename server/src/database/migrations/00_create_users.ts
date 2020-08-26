import Knex from 'knex';

export async function up(knex: Knex){ //operações que serão feitas no BD
    return knex.schema.createTable('users', table => {
        table.increments('id').primary(); //vai incrementando 
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    })
}

export async function down(knex: Knex){ //para remover se der algum problema
    return knex.schema.dropTable('users');
}