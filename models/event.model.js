var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('event', eventSchema);