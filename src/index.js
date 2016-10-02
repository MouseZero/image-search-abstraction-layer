'use strict'
require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.send('Hello World')
})

const port = process.argv[2] || 8080
app.listen(port, _ => {
  console.log('Node server started on ' + port + '!!!')
})
