import { DataTypes } from "sequelize"
import { connection } from "./connection.js"

const Agenda = connection.define("agenda", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, { 
    timestamps: false,
  })

  export default Agenda