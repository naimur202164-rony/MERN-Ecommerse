const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
 
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forget").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route('/logout').post(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetails)


module.exports = router;
