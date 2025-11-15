import Banco from '../config/database.js'

class Cachorro {
    constructor() {
        this.model = Banco.db.define('cachorros', {
            id: {
                type: Banco.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            raca: {
                type: Banco.db.Sequelize.STRING
            }
        })
    }
}

export default new Cachorro().model