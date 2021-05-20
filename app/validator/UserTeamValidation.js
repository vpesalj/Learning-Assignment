const { check, validationResult } = require("express-validator");

const validateUserTeam = () => [
  check("userId")
    .trim()
    .not()
    .isEmpty()
    .withMessage("User id must not be empty")
    .isNumeric()
    .withMessage("Id of user is required"),

  check("teamId")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Team id must not be empty")
    .isNumeric()
    .withMessage("Id of team is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(400).json({
        errors: errors.array(),
      });
    next();
  },
];

module.exports = validateUserTeam();
