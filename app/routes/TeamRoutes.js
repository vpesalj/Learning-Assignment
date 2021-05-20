const teamController = require("../controllers/TeamController");
const validate = require("../validator/TeamValidation");
const validateUserTeam = require("../validator/UserTeamValidation");

var router = require("express").Router();

router
  .route("/")
  .get(teamController.findAll)
  .post(validate, teamController.create);

router
  .route("/:id")
  .get(teamController.findOne)
  .put(validate, teamController.update)
  .delete(teamController.delete);

router.route("/users").post(validateUserTeam, teamController.addUserToTeam);

module.exports = router;
