let express = require('express')

let app = express()

let personRoute = require('./routes/person')
let customerRoute = require('./routes/customer')
let path = require('path')

let bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
    next()
})

app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))

// Handler 404 resource not found
app.use((req, res, next) => {
   res.status(404).send('We think you are lost')
})

// Handler 500 
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public/500.html'))
 })

const PORT =  process.env.PORT || 3000
app.listen(PORT, ()=> console.info(`Server has stared on port ${PORT}`))

// console.log('Hello world'); 