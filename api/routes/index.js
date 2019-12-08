const express = require('express')
const router = express.Router()
const models = require('../models/index').default

router.route('/cars')
    .get((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        switch(req.query.price) {
            case "lower":
                req.query.price = { $lte: 15782 }
                break;
            case "average":
                req.query.price = { $gte: 15783, $lte: 18872 }
                break;
            case "higher":
                req.query.price = { $gte: 18873 }
                break;
            default:
                break;
        }

        models.Car.default.find(req.query, (err, cars) => {
            if (err) {
                res.status(500).send("Server Error")
                console.error(err)
            }
            else {
                console.log(cars)
                res.json(cars)
            }
        })
    })

module.exports = router;
