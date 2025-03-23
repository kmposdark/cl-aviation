import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASS, {
  host: process.env.MYSQL_HOST,
  dialect: "mysql",
});

export async function connectMySQL() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado a MySQL");
  } catch (error) {
    console.error("❌ Error al conectar a MySQL:", error);
  }
}

export default sequelize;