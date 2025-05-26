import livro from '../models/Livro.js'

class LivroController {
    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: `Falha ao listar livros: ${ error.message}` });
        }
    }

    static async listarLivroPorId (req, res) {
        try {
            const id = req.params.id;
            const livroRequisitado = await livro.findById(id);
            res.status(200).json(livroRequisitado);
        } catch (error) {
            res.status(500).json({ message: `Falha ao listar o livro solicitado: ${error.message}` });
        }
    }

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({
                message: 'Livro cadastrado com sucesso',
                livro: novoLivro
            });
        } catch (error) {
            res.status(500).json({ message: ` Falha ao cadastrar livro: ${ error.message}` });
        }
    }

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'Livro atualizado com sucesso'});
        } catch (error) {
            res.status(500).json({ message: `Falha ao atualizar o livro solicitado: ${ error.message}` });
        }
    }

    static async excluirLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: 'Livro excluído com sucesso'});
        } catch (error) {
            res.status(500).json({ message: `Falha ao excluir o livro solicitado: ${ error.message}` });
        }
    }
}

export default LivroController;