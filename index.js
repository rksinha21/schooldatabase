var mongoose = require('mongoose');

var Student = require('./student');
var Parents = require('./parent')
var url = "mongodb://localhost:27017/school"

mongoose.connect(url,{useNewUrlParser: true}, function (err,db) {
    if (err) throw err;

    console.log('Successfully connected');

});

var XYZ = new Student({
    _id: new mongoose.Types.ObjectId(),
    name: {
        firstName: 'ADARSH',
        lastName: 'KUMAR'
    },
    Roll_No: 32,
    Addmossion_No: 391 / 17,
    Mother_Name: 'MRS. SUNITA DEVI',
    Phone_Number: 7004498391,
    Father_Name: 'MR. PANKAJ MANDAL',
    Class: '1'

});    

XYZ.save()
    .then(doc=>{console.log(doc)})
    .catch(err=>{console.log(err)})

Student.find({})
       .then(doc=>{
           console.log(doc)
       })
       .catch(err=>{
           console.log(err)
       })

var detail = new Parents({
    _id:new mongoose.Types.ObjectId(),
    Father: {
        firstName: 'Mr. Pankaj Mandal',
        Occupation: 'Manager',
        Qualification: 'M.B.A'
    },
    Mother: {
        firstName: 'Mrs. Sunita Devi',
        Occupation: 'Teacher',
        Qualification: 'B.Ed'
    },
    Guardian: {
        Name: "",
        Occupation: "",
        Relation: "",
        Qualification: "",
        Contact: "",
        Address: ""
    },
    Email: 'example@abc.com',
    Contact1: 123456789,
    Contact2: 987654321,
    Contact3: "",
    Address1: '21,Residents Apt',
    Address2: 'N.P.P Colony'
})

detail.save()
      .then(doc=>{console.log(doc)})
      .catch(err => {console.log(err)})

Parents.find({})
      .then(doc=>{console.log(doc)})
      .catch(err=>{console.log(err)})