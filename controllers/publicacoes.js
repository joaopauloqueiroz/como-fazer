const api = require('../api')
const categoria = require('./categorias')

//controller nova categoria
const novaForm = async (req, res) => {
    const categorias = await api.list('categorias')
    res.render('publicacoes/nova', { categorias })
    
}

//controller nova create
const novaStore = async(req, res) => {
    await api.create('publicacoes/'+ req.body.categoria, {
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
    })
    res.redirect('/publicacoes/categoria/'+req.params.categoria)
}

//listagem das categorias
const listagem = async(req,  res) => {
    const categoria = req.params.categoria
    const publicacoes = await api.list('publicacoes/'+categoria)
     res.render('publicacoes/', {publicacoes, categoria})
 }

//apagar registro
const apagar = async(req, res) => {
    await api.apagar('publicacoes', req.params.id)
    res.redirect('/publicacoes/categoria/'+req.params.categoria)
}

//editar registro view
const editar = async(req, res) => {
    const publicacoes = await api.get('publicacoes/'+req.params.categoria, req.params.id)
        res.render('publicacoes/editar',{ 
            publicacoes,
            categoria: req.params.categoria
     })
        
}

//editar registro store
const editarStore = async(req, res) => {
    await api.update('publicacoes/'+req.params.categoria, req.params.id, {
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    res.redirect('/publicacoes/categoria/'+req.params.categoria)
}

module.exports = {
    novaForm, novaStore, listagem, apagar, editar, editarStore
}