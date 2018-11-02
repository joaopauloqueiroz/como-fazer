const express = require('express')
const router = express.Router()
const controller = require('../controllers/categorias')

router.get('/nova', controller.novaForm)

router.post('/nova', controller.novaStore)

router.get('', controller.listagem)

router.get('/excluir/:id', controller.apagar)

router.get('/editar/:id', controller.editar)

router.post('/editar/:id', controller.editarStore)

module.exports = router
