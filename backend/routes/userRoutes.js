const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
} = require("../controllers/userController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/registar").post(registerUser);
// router.post('/registar',registerUser)
router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUser,getUserDetails);
// 3:20min
router.route("/logout").get(logout);

module.exports = router;
