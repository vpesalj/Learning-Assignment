const { check, validationResult } = require("express-validator");

const validateUser = () => [
  check("fullname")
    .not()
    .isEmpty()
    .withMessage("Fullname field required")
    .isLength({ min: 4 })
    .withMessage("Minimum 4 characters required!"),

  check("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Enter valid email address"),

  check("phone").not().isEmpty().withMessage("Phone field is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(400).json({
        errors: errors.array(),
      });
    next();
  },
];

module.exports = validateUser();
