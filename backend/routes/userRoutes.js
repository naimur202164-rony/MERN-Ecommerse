const express = require("express");
const  registerUser  = require("../controllers/userController");
const router = express.Router();



router.route("/registar").post(registerUser);
// router.post('/registar',registerUser)


module.exports = router;