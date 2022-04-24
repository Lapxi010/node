const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const {users, classes, lessons, auth} = require('./routers/index')
const {logger, limiter} = require('./utils/midlewares/index')

if (process.env.NODE_ENV === 'production'){
    require('dotenv').config()
}

const PORT = process.env.PORT || 3000

app.use(bodyParser.json({limiter: '10kb'}))
app.use(logger)
app.use(limiter(3, 10000))

app.use('/users', users)
app.use('/classes', classes)
app.use('/lessons', lessons)
app.use('/', auth)

app.listen(PORT,()=>{
    console.log(`This server started on ${PORT}`)
})