const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

exports.connect = function(){
  return mongoose.connect('mongodb://brandDiscountsUser:brandDiscountsPassword@localhost:27017?retryWrites=true', {
      promiseLibrary: global.Promise,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      dbName: 'desafio_walmart'
    },
    function(err, res) {
      if(err) throw err;
      console.log('Connected to Database');
    }
    )
}