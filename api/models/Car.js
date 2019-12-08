const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectID,
    make: String,
    year: Number,
    color: String,
    price: Number,
    hasSunroof: Boolean,
    isFourWheelDrive: Boolean,
    hasLowMiles: Boolean,
    hasNavigation: Boolean,
    hasHeatedSeats: Boolean,
    hasPowerWindows: Boolean
})

const Car = mongoose.model('Car', carSchema);

exports.default = Car;