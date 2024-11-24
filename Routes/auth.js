const express = require("express");
const { login } = require("../controller/Auth/AuthSession");
const router = express.Router();

router.post('/login', login);
router.post('/logout', login);
router.post('/register', register);

module.exports = router;