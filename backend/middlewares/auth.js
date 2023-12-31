const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.auth = (req, res, next) => {
  try {
    console.log('Cookie', req.cookies.token)
    console.log('body', req.body.token)
    console.log('header', req.header('Authorisation'))
    const token =
      req.body.token ||
      req.cookies.token ||
      req.header('Authorisation').replace('Bearer', '')
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Token is missing'
      })
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET)
      console.log(decode)

      req.user = decode
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: 'token is invalid'
      })
    }
    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Something went wrong while verifying the token'
    })
  }
}