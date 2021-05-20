const { check, validationResult } = require("express-validator");

const validateTeam = () => [
  check("name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Team name field required")
    .isLength({ min: 3 })
    .withMessage("Minimum 3 characters required!"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(400).json({
        errors: errors.array(),
      });
    next();
  },
];

module.exports = validateTeam();
