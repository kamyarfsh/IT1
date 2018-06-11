var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentCourseSchema = new Schema({
    student: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('studentCourse', studentCourseSchema);