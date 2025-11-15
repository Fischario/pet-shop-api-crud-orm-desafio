import Cachorro from '../model/cachorros.js'

class ServiceCachorro {
    async PegarTodos() {
        return await Cachorro.findAll()
    }
    async PegarUm(id) {
        const cachorro = await Cachorro.findByPk(id)
        return cachorro
    }
    async Criar(raca) {
        await Cachorro.create({ raca })
    }
    async Alterar(id, raca) {
        const cachorro = await Cachorro.findByPk(id)
        cachorro.raca = raca || Cachorro.raca

        await cachorro.save()
    }
    async Deletar(id) {
        const cachorro = await Cachorro.findByPk(id)
        await cachorro.destroy()
    }
}

export default new ServiceCachorro()