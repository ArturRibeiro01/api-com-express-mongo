import express from 'express';
import ConnectDatabase from './config/dbConnect.js';
import routes from "./routes/index.js"

const conexao = await ConnectDatabase();

conexao.on('error', (err) => {
    console.log(`Erro na conexão com o banco de dados: ${err}`);
})

conexao.once('open', () => {
    console.log("Banco de dados conectado com sucesso");
})

const app = express();
routes(app);

export default app;