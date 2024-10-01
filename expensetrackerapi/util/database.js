import Sequelize from 'sequelize';

const sequelize = new Sequelize("expensetracker", "harshit", "19962024", {
    dialect: "mysql",
    host: "localhost",
  });
  
export default sequelize;