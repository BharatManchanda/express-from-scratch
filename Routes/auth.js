const express = require("express");
const Auth = require("../controller/Auth/AuthSession");
const router = express.Router();
const auth = require("../Middleware/Auth");

router.post('/login', Auth.login);
router.post('/register', Auth.register);

router.use(auth);
router.post('/logout', Auth.logout);
router.post('/get-me', Auth.getMe);

module.exports = router;