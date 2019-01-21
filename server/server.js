require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const ac = require('./controllers/authController')

const app = express()

const {CONNECTION_STRING, SERVER_PORT, SECRET} = process.env

app.use(express.json())

app.use(session({
    secret: SECRET,
    resave: false, 
    saveUninitialized: false
}))

app.post('/auth/register', ac.register)
app.post('/auth/login', ac.login)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))
})
