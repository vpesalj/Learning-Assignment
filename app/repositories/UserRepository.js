const db = require("../models");
const User = db.users;

class UserRepository {
  findAll() {
    return User.findAll();
  }

  getOne(id) {
    return User.findByPk(id);
  }

  create(user) {
    return User.create(user);
  }

  update(id, user) {
    return User.update(user, { where: { id: id } });
  }

  remove(id) {
    return User.destroy({ where: { id: id } });
  }
}
module.exports = new UserRepository();
