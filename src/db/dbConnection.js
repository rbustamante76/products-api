const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

exports.connect = function(){
  return mongoose.connect('mongodb://brandDiscountsUser:brandDiscountsPassword@cluster0-shard-00-02.swo48.mongodb.net:27017?retryWrites=true', {
      promiseLibrary: global.Promise,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      dbName: 'promotions'
    },
    function(err, res) {
      if(err) throw err;
      console.log('Connected to Database');
    }
    )
}