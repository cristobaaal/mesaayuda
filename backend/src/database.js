const mongoose = require('mongoose');

const URI = 'mongodb://localhost/login';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(function () { 
    console.log('Success to establish connection with mongodb :)'); 
  }).catch(function (err) { 
    console.log('Failed to establish connection with mongodb :('); 
    console.log(err.message); 
  });