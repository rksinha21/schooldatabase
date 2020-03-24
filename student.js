var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    Roll_No: Number,
    Addmission_No: Number,
    Phone_Number: Number,
    Father_Name: String,
    Mother_Name: String,
    Class: String
});

var Student = mongoose.model('Student', studentSchema);

module.exports = Student;