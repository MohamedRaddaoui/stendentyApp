const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
//local imports
const connectDb = require('./db.js')
const eventRoutes = require('./controllers/event.controller.js')
const { errorHandler } = require('./middlewares/index.js')

const app = express()

//JSON Converting Middleware
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:4200'}))
app.use('/api/events', eventRoutes)
app.use(errorHandler)

connectDb()
    .then( () => { 
        console.log('DB Connection Succeeded.')
        app.listen(3000, 
            () => console.log('server started at 3000'))
    } )
    .catch(err => console.log(err))
