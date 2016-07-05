/**
 * Created by Rodrigo on 3/11/16.
 */
var User = require('mongoose').model('User');

module.exports = function(app){
  app.route('/login')
    .post(function(req,res){
      console.log("Req:",req.body);
      var user = req.body;
      User.find({'username': user.username},
        function(err,users) {
          if (users.length == 0) {
            res.end('ERR');
          } else {
            res.end('OK');
          }
        });
    });

  };

