import { Sequelize } from "sequelize"

class Banco {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            database: 'petshop',
            host: '127.0.0.1',
            username: 'root',
            password: '',
            dialect: 'mysql'
        })
    }
}

export default new Banco()