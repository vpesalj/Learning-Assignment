const db = require("./index");
const Team = require("./Team");
const User = require("./User");

module.exports = (sequelize, DataTypes) => {
  const UserTeams = sequelize.define("UserTeams", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Teams",
        key: "id",
      },
    },
  });

  return UserTeams;
};
