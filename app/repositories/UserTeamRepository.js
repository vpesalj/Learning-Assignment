const db = require("../models");
const UserTeams = db.userTeams;

class UserTeamRepository {
  findAll(userId, teamId) {
    return UserTeams.findAll({
      where: {
        userId: userId,
        teamId: teamId,
      },
    });
  }

  removeUser(userId) {
    return UserTeams.destroy({
      where: {
        userId: userId,
      },
    });
  }

  removeTeam(teamId) {
    return UserTeams.destroy({
      where: {
        teamId: teamId,
      },
    });
  }

  create(obj) {
    return UserTeams.create(obj);
  }
}

module.exports = new UserTeamRepository();
