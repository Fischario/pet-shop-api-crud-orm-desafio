import express from 'express'
import ControllerCliente from '../controller/clientes.js'

const router = new express.Router()

router.get('/clientes', ControllerCliente.PegarTodos)
router.get('/cliente/:id', ControllerCliente.PegarUm)
router.post('/cliente', ControllerCliente.Criar)
router.put('/cliente/:id', ControllerCliente.Alterar)
router.delete('/cliente/:id', ControllerCliente.Deletar)

export default router