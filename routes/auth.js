const express = require("express")
const router = express.Router()

const {
  register,
  login,
  forgetPassword,
  resetPassword,
} = require("../controllers/auth")

router.route("/register").post(register)

router.route("/login").post(login)

router.route("/forget-password").post(forgetPassword)

router.route("/reset-password/:resetToken").post(resetPassword)

module.exports = router
