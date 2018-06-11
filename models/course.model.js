var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        required: true,
        default: new Date()
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('course', eventSchema);