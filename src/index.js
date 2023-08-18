const express = require('express')
const bodyParser = require('body-parser')

const { PORT } = require('./config/serverConfig')
const CityRepository = require('./repository/city-repository')

const setupAndStartserver = async () => {
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(3000, async () => {
        console.log(`Server started at ${process.env.PORT}`)
    })
}
setupAndStartserver()