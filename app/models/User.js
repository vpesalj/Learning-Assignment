module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    fullname: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false,
      validate: {
        notEmpty: true,
      },
    },

    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    phone: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        not: ["[a-z]"],
      },
    },
  });

  Users.associate = function (models) {
    Users.belongsToMany(db.teams, {
      through: "UserTeams",
      as: "Teams",
      foreignKey: "id",
    });
  };

  return Users;
};
