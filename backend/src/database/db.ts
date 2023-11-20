import { Sequelize } from 'sequelize'
import databaseConfig from '../databaseConfig'

const { database } = databaseConfig

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password,
    {
        host: database.host,
        dialect: 'postgres'
    }
)

export default sequelize