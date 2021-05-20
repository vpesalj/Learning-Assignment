const TeamService = require("../services/TeamService");

exports.create = (req, res, next) => {
  TeamService.create({ name: req.body.name })
    .then((team) => {
      res.status(201).json(team);
    })
    .catch((error) => {
      next(error);
    });
};

exports.findAll = (req, res, next) => {
  TeamService.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      next(error);
    });
};

exports.findOne = (req, res, next) => {
  TeamService.getOne(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      next(error);
    });
};

exports.update = (req, res, next) => {
  const team = req.body;
  const id = req.params.id;
  TeamService.update(id, team)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      next(error);
    });
};

exports.delete = (req, res, next) => {
  TeamService.remove(req.params.id)
    .then(() => res.status(200).json("deleted"))
    .catch((error) => {
      next(error);
    });
};

exports.addUserToTeam = (req, res, next) => {
  const obj = {
    userId: req.body.userId,
    teamId: req.body.teamId,
  };
  TeamService.addUserToTeam(obj)
    .then((obj) => {
      res.status(201).json(obj);
    })
    .catch((error) => {
      next(error);
    });
};
