//Connect to Mongo db
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//changed to connection to heroku
const uri = 'mongodb://Master:Password123@ds155516.mlab.com:55516/heroku_rlf28wdk' 

mongoose.connect(uri).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        }
  );


module.exports = mongoose.connection