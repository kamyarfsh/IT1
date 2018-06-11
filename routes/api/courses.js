var express = require('express');
var jwt = require('jsonwebtoken');
var md5 = require('md5');
var router = express.Router();

var config = require('../../config');

var Course = require('../../models/course.model');
var StudentCourse = require('../../models/studentCourse.model');
var {
    auth,
    permit,
    limiter,
    userExist
} = require('../../functions/authentication');

router.get('/getAll', auth, permit('teacher', 'student'), async (req, res) => {
    try {
        let courses = await Course.find();
        res.send({
            status: 'success',
            data: courses
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
        let c = new Course();
        c.name = req.body.name;
        c.code = req.body.code;
        c.description = req.body.description;
        await c.save();
        res.send({
            status: 'success',
            data: {
                message: 'course created.'
            }
        })
    } catch (error) {
        return res.send({
            status: 'error',
            error: error
        })
    }
});

router.post('/addstudent', auth, permit('student'), async (req, res) => {
    try {
        let c = new StudentCourse();
        c.student = req.user._id;
        // console.log(JSON.stringify(req.user));
        c.course = req.body.course;
        await c.save();
        res.send({
            status: 'success',
            data: {
                message: 'added successfully.'
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