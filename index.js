const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000
const dbConfig = require('./config/dbConfig.js')
app.use(express.json())
app.use(cors())

const userRoute = require('./routes/usersRoute.js')
  
app.use('/api/users',userRoute)

  app.listen(port, () => {
    console.log(`BloodConnect+ is running on port ${port}`)
  })