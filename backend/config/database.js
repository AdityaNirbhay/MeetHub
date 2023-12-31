const mongoose = require('mongoose')

require('dotenv').config()

exports.connect = () => {
  mongoose
    .connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('DB connected succesfully'))
    .catch(error => {
      console.log('An Error Occured')
      console.log(error)
      process.exit(1)
    })
}
