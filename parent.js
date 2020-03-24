var mongoose = require('mongoose');

var parentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Father: {
        firstName: String,
        Occupation: String,
        Qualification: String
    },
    Mother: {
        firstName: String,
        Occupation: String,
        Qualification: String
    },
    Guardian: {
        Name: String,
        Occupation: String,
        Relation: String,
        Qualification: String,
        Contact: Number,
        Address: String
    },
    Email: String,
    Contact1: Number,
    Contact2: Number,
    Contact3: Number,
    Address1: String,
    Address2: String
});

var Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;