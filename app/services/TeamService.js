const TeamRepository = require("../repositories/TeamRepository");
const UserTeamRepository = require("../repositories/UserTeamRepository");

class TeamService {
  findAll() {
    return new Promise((resolve, reject) => {
      TeamRepository.findAll()
        .then((team) => {
          resolve(team);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  create(team) {
    return new Promise((resolve, reject) => {
      TeamRepository.create(team)
        .then((team) => {
          resolve(team);
        })
        .catch((error) => {
          var errorMessage = error.errors.map((e) => e.message);
          reject(errorMessage);
        });
    });
  }

  update(id, team) {
    return new Promise((resolve, reject) => {
      TeamRepository.update(id, team)
        .then((num) => {
          if (num[0]) {
            resolve("Updated");
          } else {
            reject("Team does not exist");
          }
        })
        .catch((error) => {
          var errorMessage = error.errors.map((e) => e.message);
          reject(errorMessage);
        });
      v;
    });
  }

  remove(id) {
    return new Promise((resolve, reject) => {
      TeamRepository.remove(id)
        .then((num) => {
          if (num) {
            resolve("Deleted");
          } else {
            reject("Team does not exist");
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getOne(id) {
    return new Promise((resolve, reject) => {
      TeamRepository.getOne(id)
        .then((team) => {
          if (!team) resolve("Team not found");
          resolve(team);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  addUserToTeam(obj) {
    return new Promise((resolve, reject) => {
      UserTeamRepository.findAll(obj.userId, obj.teamId) //check if user is already in chosen team
        .then((values) => {
          if (values.length !== 0) reject("User is already in this team");
        });
      UserTeamRepository.create(obj)
        .then(() => {
          resolve("User is added to team");
        })
        .catch((error) => {
          if (error.name === "SequelizeForeignKeyConstraintError") {
            reject("Check if user and team exist");
          } else {
            reject(error);
          }
        });
    });
  }
}

module.exports = new TeamService();
