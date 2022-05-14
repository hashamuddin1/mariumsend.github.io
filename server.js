const express = require('express')
const app = express()
require('dotenv').config()
const router = require('./router/routes')
const port = process.env.PORT

app.use([router])

app.listen(port, () => {
    console.log(`Application is running on port number ${port}`)
})