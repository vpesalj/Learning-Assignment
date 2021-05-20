const UserRepository = require("../repositories/UserRepository");

class UserService {
  findAll() {
    return new Promise((resolve, reject) => {
      UserRepository.findAll()
        .then((users) => {
          resolve(users);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  create(user) {
    return new Promise((resolve, reject) => {
      UserRepository.create(user)
        .then((user) => {
          resolve("User added");
        })
        .catch((error) => {
          var errorMessage = error.errors.map((e) => e.message);
          reject(errorMessage);
        });
    });
  }

  update(id, user) {
    return new Promise((resolve, reject) => {
      UserRepository.update(id, user)
        .then((num) => {
          if (num) {
            resolve("Updated");
          } else {
            reject("User does not exist");
          }
        })
        .catch((error) => {
          var errorMessage = error.errors.map((e) => e.message);
          reject(errorMessage);
        });
    });
  }

  remove(id) {
    return new Promise((resolve, reject) => {
      UserRepository.remove(id)
        .then((num) => {
          if (num) {
            resolve("Deleted");
          } else {
            reject("User does not exist");
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getOne(id) {
    return new Promise((resolve, reject) => {
      UserRepository.getOne(id)
        .then((user) => {
          if (!user) resolve("User not found");
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = new UserService();
