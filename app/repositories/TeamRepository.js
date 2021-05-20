const db = require("../models");
const Team = db.teams;

class TeamRepository {
  findAll() {
    return Team.findAll({
      attributes: ["id", "name"],
    });
  }

  getOne(id) {
    return Team.findByPk(id);
  }

  create(team) {
    return Team.create(team);
  }

  update(id, team) {
    return Team.update(team, { where: { id: id } });
  }

  remove(id) {
    return Team.destroy({ where: { id: id } });
  }
}

module.exports = new TeamRepository();
