var express = require('express');
var router = express.Router();

router.use('/api/users', require('./api/users'));
router.use('/api/courses', require('./api/courses'));
router.use('/api/events', require('./api/events'));

router.all('/', (req, res) => {
    res.send({
        status: 'success',
    })
});

module.exports = router;