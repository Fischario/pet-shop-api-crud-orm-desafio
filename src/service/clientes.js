import Cliente from '../model/clientes.js'

class ServiceCliente {
    async PegarTodos() {
        return await Cliente.findAll()
    }
    async PegarUm(id) {
        const cliente = await Cliente.findByPk(id)
        return cliente
    }
    async Criar(nome, telefone) {
        await Cliente.create({ nome, telefone })
    }
    async Alterar(id, nome, telefone) {
        const cliente = await Cliente.findByPk(id)
        cliente.nome = nome || cliente.nome
        cliente.telefone = telefone || cliente.telefone

        await cliente.save()
    }
    async Deletar(id) {
        const cliente = await Cliente.findByPk(id)
        await cliente.destroy()
    }
}

export default new ServiceCliente()