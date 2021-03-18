exports.register = (req, res, next) => {
  res.send("Register route")
}

exports.login = (req, res, next) => {
  res.send("Login route")
}

exports.forgetPassword = (req, res, next) => {
  res.send("Forget Password route")
}

exports.resetPassword = (req, res, next) => {
  res.send("Reset Password route")
}
