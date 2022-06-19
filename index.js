const express = require('express')
const router = require('./src/routes/index')
const middlewares = require('./src/middlewares/middlewareError')

const app = express()
app.use(express.json())
app.use(router)
app.use(middlewares)
require('dotenv').config();

const port = process.env.PORT || 3000


app.get('/', (req, res) => {
  console.log('oi')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))