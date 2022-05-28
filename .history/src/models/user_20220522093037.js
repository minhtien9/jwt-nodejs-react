'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.belongsTo
        }
    }
    User.init(
        {
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            username: DataTypes.STRING,
            address: DataTypes.STRING,
            phone: DataTypes.STRING,
            sex: DataTypes.STRING,
            groupId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'User',
        }
    )
    return User
}
