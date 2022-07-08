const express = require("express");
const  {registerUser,loginUser, logout}  = require("../controllers/userController");
const router = express.Router();



router.route("/registar").post(registerUser);
// router.post('/registar',registerUser)
router.route("/login").post(loginUser);


router.route("/logout").get(logout)

module.exports = router;