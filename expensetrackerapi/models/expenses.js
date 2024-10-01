import { Sequelize } from "sequelize";
import sequelize from "../util/database.js";

const Expenses = sequelize.define("expenses",{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    amount:{
        type:Sequelize.BIGINT,
        allowNull:false,
        
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false
    }
});
export default Expenses;