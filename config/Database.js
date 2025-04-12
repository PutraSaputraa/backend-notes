import { Sequelize } from "sequelize";

const db = new Sequelize("myouinotes", "databaseku", "12345678", {
    host: "34.55.168.45",
    dialect: "mysql",
    port: "3306"
});

export default db;
