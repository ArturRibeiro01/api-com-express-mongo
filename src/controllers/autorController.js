import livro from '../models/Livro.js'
import { autor } from '../models/Autor.js'

class AutorController {
    static async listarAutores (req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (error) {
            res.status(500).json({ message: `Falha ao listar listaAutores: ${ error.message}` });
        }
    }

    static async listaAutorPorId (req, res) {
        try {
            const id = req.params.id;
            const autorRequisitado = await livro.findById(id);
            res.status(200).json(autorRequisitado);
        } catch (error) {
            res.status(500).json({ message: `Falha ao listar o autor solicitado: ${error.message}` });
        }
    }

    static async cadastrarAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({
                message: 'Autor cadastrado com sucesso',
                autor: novoAutor
            });
        } catch (error) {
            res.status(500).json({ message: ` Falha ao cadastrar autor: ${ error.message}` });
        }
    }

    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'autor atualizado com sucesso'});
        } catch (error) {
            res.status(500).json({ message: `Falha ao atualizar o autor solicitado: ${ error.message}` });
        }
    }

    static async excluirAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: 'autor excluído com sucesso'});
        } catch (error) {
            res.status(500).json({ message: `Falha ao excluir o autor solicitado: ${ error.message}` });
        }
    }
}

export default AutorController;