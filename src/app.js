import express from 'express';
import ConnectDatabase from './config/dbConnect.js';

const conexao = await ConnectDatabase();

conexao.on('error', (err) => {
    console.log(`Erro na conexão com o banco de dados: ${err}`);
})

conexao.once('open', () => {
    console.log("Banco de dados conectado com sucesso");
})

const app = express();
app.use(express.json()); //middleware para converter o body da requisição em JSON

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis",
    },
    {
        id: 2,
        titulo: "O Hobbit",
    },
    {
        id: 3,
        titulo: "Harry Potter e a Pedra Filosofal",
    },
    {
        id: 4,
        titulo: "Harry Potter e a Câmara Secreta",
    },
    {
        id: 5,
        titulo: "Harry Potter e o Prisioneiro de Azkaban",
    },
]

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}


app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
})

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/livros", (req, res) => {
  livros.push(req.body);
    res.status(201).json(livros);
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send(`livro removido com sucesso`);
})

export default app;

