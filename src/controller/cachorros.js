import ServiceCachorro from '../service/cachorros.js'

class ControllerCachorro {
    async PegarTodos(req, res) {
        try {
            const cachorros = await ServiceCachorro.PegarTodos()
            res.status(200).send({ data: cachorros })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async PegarUm(req, res) {
        try {
            const id = req.params.id
            const cachorro = await ServiceCachorro.PegarUm(id)
            res.status(200).send({ data: cachorro })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async Criar(req, res) {
        try {
            const raca = req.body.raca
            await ServiceCachorro.Criar(raca)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async Alterar(req, res) {
        try {
            const id = req.params.id
            const raca = req.body?.raca
            await ServiceCachorro.Alterar(id, raca)
            res.status(200).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async Deletar(req, res) {
        try {
            const id = req.params.id
            await ServiceCachorro.Deletar(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}

export default new ControllerCachorro()