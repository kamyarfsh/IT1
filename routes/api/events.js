var express = require('express');
var jwt = require('jsonwebtoken');
var md5 = require('md5');
var router = express.Router();

var config = require('../../config');

var Event = require('../../models/event.model');
var {
    auth,
    permit,
    limiter,
    userExist
} = require('../../functions/authentication');

router.get('/getAll', auth, permit('student'), async (req, res) => {
    try {
        let events = await Event.find();
        res.send({
            status: 'success',
            data: events
        })
    } catch (error) {
        res.send({
            status: 'error',
            error: error
        })
    }
});

router.post('/add', auth, permit('teacher'), async (req, res) => {
    try {
        let e = new Event();
        a.name = req.body.name;
        a.date = req.body.date;
        a.description = req.body.description;
        await e.save();
        res.send({
            status: 'success',
            data: {
                message: 'event created.'
            }
        })
    } catch (error) {
        return res.send({
            status: 'error',
            error: error
        })
    }
});

module.exports = router;