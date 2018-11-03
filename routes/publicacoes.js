const express = require('express')
const router = express.Router()
const controller = require('../controllers/publicacoes')

router.get('/nova', controller.novaForm)

router.post('/nova', controller.novaStore)

router.get('/categoria/:categoria', controller.listagem)

router.get('/excluir/:categoria/:id', controller.apagar)

router.get('/editar/:categoria/:id', controller.editar)

router.post('/editar/:categoria/:id', controller.editarStore)

module.exports = router
