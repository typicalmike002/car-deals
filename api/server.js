
require('dotenv').config({ path: 'api/.env' })

const fs = require('fs')
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/index')

const models = require('./models/index').default
const connectDB = require('./models/index').connectDB

connectDB()
    .then(() => {
        console.log('Database connection successful.')
        const data= JSON.parse(fs.readFileSync('api/data.json'))

        models.Car.default.deleteMany({}, function(err){
            if (err) conosole.log('Failed to delete old car records:', err)
            console.log('Successfully removed old car records')
        })

        models.Car.default.insertMany(data, function(err, docs){
            if (err) console.log('Failed to add new car records:', err)
            console.log('Successfully added new car records')
        })
    })
    .catch((err) => {
        console.error('Database connection error:\n', err)
    })

const app = express()
app.use('/_api', routes)
app.use((req, res) => {
    res.status(404).send("404 Not Found")
})
app.use((err, req, res) => {
    console.error(err.stack)
    res.status(500).send("500 Server Error")
})

app.listen(process.env.PORT, () => console.log(`Car Deals server listening on port ${process.env.PORT}`))