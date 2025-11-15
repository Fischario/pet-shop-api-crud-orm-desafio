import express from 'express'
import Banco from './config/database.js'
import routerCliente from './router/clientes.js'
import routerCachorro from './router/cachorros.js'

const app = express()

app.use(express.json())

app.use('/api/v1', routerCliente)
app.use('/api/v1', routerCachorro)

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