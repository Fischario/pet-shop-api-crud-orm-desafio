import express from 'express'
import Banco from './config/database.js'
import router from './router/clientes.js'

const app = express()

app.use(express.json())

app.use('/api/v1', router)

const porta = 9999

Banco.db
    .sync({ force: false })
    .then(() => {
        app.listen(porta, () => {
            console.log(`servidor invadindo a guatemala na porta ${porta}`)
        })
    })
    .catch((e) => {
        console.log(`Deu não mané, segue erro: ${e}`)
    })