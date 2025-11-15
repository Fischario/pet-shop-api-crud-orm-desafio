import express from 'express'
import ControllerCachorro from '../controller/cachorros.js'

const router = new express.Router()

router.get('/cachorros', ControllerCachorro.PegarTodos)
router.get('/cachorro/:id', ControllerCachorro.PegarUm)
router.post('/cachorro', ControllerCachorro.Criar)
router.put('/cachorro/:id', ControllerCachorro.Alterar)
router.delete('/cachorro/:id', ControllerCachorro.Deletar)

export default router