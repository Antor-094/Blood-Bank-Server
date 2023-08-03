const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000


  
  app.listen(port, () => {
    console.log(`BloodConnect+ is running on port ${port}`)
  })