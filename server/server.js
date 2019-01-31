require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')

const ac = require('./controllers/authController')
const connCtrl = require('./controllers/connectionController')
const compCtrl = require('./controllers/companyController')

const app = express()

const {CONNECTION_STRING, SERVER_PORT, SECRET, NODE_ENV, ENVIRONMENT} = process.env

app.use(express.json())

app.use(session({
    secret: SECRET,
    resave: false, 
    saveUninitialized: false
}))

app.use(async (req, res, next) => {
    if(NODE_ENV === 'development'){
        const db = req.app.get('db')
        const userData = await db.set_data()
        req.session.user = userData[0]
        console.log('mid', req.session.user)
        next()
    }else{
        next()
    }
})

app.post('/auth/register', ac.register)
app.post('/auth/login', ac.login)
app.post('/auth/logout', ac.logout)
app.get('/auth/user', ac.getUserData)

app.post('/api/connection', connCtrl.addConnection)
app.get('/api/connections', connCtrl.getAllConnections)

app.post('/api/company', compCtrl.addCompany)
app.get('/api/companies', compCtrl.getAllCompanies)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))
})
