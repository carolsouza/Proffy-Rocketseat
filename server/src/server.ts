import express from 'express';
import routes from './routes';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json()); //introduz o pacote
app.use(routes);

app.listen(3333);
// --MÉTODOS--
// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação (para paginação colocar no insomnia /users?page=2)

//app.delete('/users/:id', (request, response)) -> passar id 1 para o insomnia na rota http

/*app.get('/', (request, response) => {
    //console.log(request.params ou .id); params para recuperar e id para deletar
    //console.log(request.query)
    //console.log(request.body);

    const users = [
        { name: 'Diego', age: 25},
        { name: 'Vini', age: 20}
    ]
    return response.json(users);
    return response.json({ message: 'Hello World'})
});*/

// www.minhaapi.com.br/3333
// localhost:3333

