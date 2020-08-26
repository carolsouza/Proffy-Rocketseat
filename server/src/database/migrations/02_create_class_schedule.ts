import Knex from 'knex';

export async function up(knex: Knex){ //operações que serão feitas no BD
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary(); //vai incrementando 
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE') //altera em todos os lugares q precisam alterar
            .onDelete('CASCADE'); //deleta todas as aulas do professor
    })
}

export async function down(knex: Knex){ //para remover se der algum problema
    return knex.schema.dropTable('class_schedule');
}