const api = require('../api')

//controller nova categoria
const novaForm = (req, res) => {
    res.render('categorias/nova')
    
}

//controller nova create
const novaStore = async(req, res) => {
    await api.create('categorias', req.body.categoria)
    res.redirect('/categorias')
}

//listagem das categorias
const listagem = async(req,  res) => {
    const categorias = await api.list('categorias')
     res.render('categorias/index', {categorias})
 }

//apagar registro
const apagar = async(req, res) => {
    await api.apagar('categorias', req.params.id)
    res.redirect('/categorias')
}

//editar registro view
const editar = async(req, res) => {
    const categoria = await api.get('categorias', req.params.id)
        res.render('categorias/editar',{categoria})
        
}

//editar registro store
const editarStore = async(req, res) => {
    await api.update('categorias', req.params.id,req.body.categoria)

    res.redirect('/categorias')
}

module.exports = {
    novaForm, novaStore, listagem, apagar, editar, editarStore
}