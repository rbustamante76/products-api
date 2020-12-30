const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

exports.connect = function(){
  return mongoose.connect('mongodb+srv://brandDiscountsUser:brandDiscountsPassword@cluster0.swo48.mongodb.net/promotions?retryWrites=true&w=majority', {
      promiseLibrary: global.Promise,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    },
    function(err, res) {
      if(err) throw err;
      console.log('Connected to Database');
    }
    )
}