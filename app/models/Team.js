const { users } = require("./User");

module.exports = (sequelize, DataTypes) => {
  const Teams = sequelize.define("Teams", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
  });

  Teams.associate = function (models) {
    Teams.belongsToMany(users, {
      through: "UserTeams",
      as: "Teams",
      foreignKey: "id",
    });
  };

  return Teams;
};
