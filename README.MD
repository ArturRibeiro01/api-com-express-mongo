# Livraria API

Estre projeto é uma API REST para gerenciamento de uma livraria, desenvolvida em Node.js com Express e MongoDB.
O projeto inclui funcionalidades para gerenciar livros e autores,para fixar os conceitos CRUD de
e API REST, desenvolvida em Node.js com Express e MongoDB.

## Funcionalidades

- CRUD de livros e autores
- Integração com MongoDB usando Mongoose
- Suporte a variáveis de ambiente com dotenv
- Estrutura modular para fácil manutenção

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm
- MongoDB (local ou Atlas)

## Instalação

1. Clone o repositório:



O servidor estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

- `src/app.js` — Configuração do Express e middlewares
- `server.js` — Ponto de entrada da aplicação
- `.env` — Variáveis de ambiente (NUNCA versionar este arquivo)
- `package.json` — Dependências e scripts

## Endpoints Principais

- `GET /livros` — Lista todos os livros
- `POST /livros` — Cadastra um novo livro
- `GET /autores` — Lista todos os autores
- `POST /autores` — Cadastra um novo autor

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: minha nova feature'`)
4. Faça push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT.