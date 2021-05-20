const userController = require("../controllers/UserController");
const validate = require("../validator/UserValidation");
var router = require("express").Router();

router
  .route("/")
  .get(userController.findAll)
  .post(validate, userController.create);

router
  .route("/:id")
  .get(userController.findOne)
  .put(validate, userController.update)
  .delete(userController.delete);

module.exports = router;
