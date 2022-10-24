const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
 
} = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route('/logout').post(logout);
router.route("/password/forget").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);


module.exports = router;
