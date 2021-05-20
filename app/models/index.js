const dbConfig = require("../config/config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.teams = require("./Team.js")(sequelize, Sequelize);
db.userTeams = require("./UserTeams")(sequelize, Sequelize);
db.users = require("./User.js")(sequelize, Sequelize);

module.exports = db;
