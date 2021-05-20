const UserService = require("../services/UserService");

exports.create = (req, res, next) => {
  const user = req.body;
  UserService.create(user)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      next(error);
    });
};

exports.findAll = (req, res, next) => {
  UserService.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      next(error);
    });
};

exports.findOne = (req, res, next) => {
  const id = req.params.id;
  UserService.getOne(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      next(error);
    });
};

exports.update = (req, res, next) => {
  const id = req.params.id;
  const user = req.body;
  UserService.update(id, user)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      next(error);
    });
};

exports.delete = (req, res, next) => {
  const id = req.params.id;
  UserService.remove(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      next(error);
    });
};
