const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

require('dotenv').config()

exports.signup = async (req, res) => {
  try {
    const { FirstName, LastName, email, password, confirmPassword } = req.body
    const alreadyExistUser = await User.findOne({ email })

    if(!FirstName || !LastName || !email || !password || !confirmPassword)
    {
        return res.status(401).json({
            success : false,
            message : "Please fill all details"
        })
    }

    if (alreadyExistUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists , Please Login'
      })
    }
    let hashPassword
    try {
      hashPassword = await bcrypt.hash(password, 10)
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Cant able to hash your password'
      })
    }
    const user = await User.create({
      FirstName,
      LastName,
      email,
      confirmPassword: hashPassword,
      password: hashPassword
    })

    console.log(user)
    return res.status(200).json({
      success: true,
      message: 'user Created Successfully'
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: 'there is an error , please try after sometime'
    })
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please fill correct details'
      })
    }
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User is not registered'
      })
    }

    const payload = {
      email: user.email,
      id: user._id
    }

    if (await bcrypt.compare(password, user.password)) {
      let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' })
      user.token = token
      user.password = undefined
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true
      }

      console.log({ token, user })
      res.cookie('DivyamKiCookie', token, options).status(200).json({
        success: true,
        token,
        user,
        message: 'User logged in successfully'
      })
    } else {
      return res.status(403).json({
        success: false,
        message: 'Password Incorrect'
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: 'Login Failure'
    })
  }
}
