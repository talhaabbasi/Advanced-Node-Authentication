const User = require("../models/User")
const ErrorResponse = require("../utils/errorResponse")

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body
  try {
    const user = await User.create({
      username,
      email,
      password,
    })

    res.status(201).json({
      success: true,
      user,
    })
  } catch (error) {
    next(error)
  }
}

exports.login = async (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    next(new ErrorResponse("Please provide and email and password", 400))
  }
  try {
    const user = await User.findOne({ email }).select("+password")
    if (!user) next(new ErrorResponse("Invalid credentials", 401))
    const match = await user.match(password)
    if (!match) next(new ErrorResponse("Invalid credentials", 401))
    res.status(200).json({
      success: true,
      token: "323eqd2edq2",
    })
  } catch (error) {
    next(error)
  }
}

exports.forgetPassword = (req, res, next) => {
  res.send("Forget Password route")
}

exports.resetPassword = (req, res, next) => {
  res.send("Reset Password route")
}
