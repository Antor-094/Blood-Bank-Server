const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000
const dbConfig = require('./config/dbConfig.js')

  
  app.listen(port, () => {
    console.log(`BloodConnect+ is running on port ${port}`)
  })