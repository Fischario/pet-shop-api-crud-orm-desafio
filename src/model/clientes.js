import Banco from '../config/database.js'

class Cliente {
    constructor() {
        this.model = Banco.db.define('clientes', {
            id: {
                type: Banco.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Banco.db.Sequelize.STRING
            },
            telefone: {
                type: Banco.db.Sequelize.STRING,
                unique: true
            }
        })
    }
}

export default new Cliente().model