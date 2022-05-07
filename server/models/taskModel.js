var mongoose = require('mongoose');
//get schema object
var Schema = mongoose.Schema;

var schema = new Schema({
    task: {type: String, required: true},
    description: {type: String, required: false},
    createdAt: {type: Date},
    updatedAt: {type: Date}
});


module.exports = mongoose.model("Task", schema)