const mongoose = require('mongoose')
const Car = require('./Car')

const connectDB = () => {
    return mongoose.connect(process.env.DATABASE_URL, { 
        dbName: 'db', 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
}

const models = { Car }

exports.connectDB = connectDB
exports.default = models