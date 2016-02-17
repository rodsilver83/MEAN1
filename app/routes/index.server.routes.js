/**
 * Created by Rodrigo on 2/17/16.
 */
module.exports = function(app){
  var index = require('../controllers/index.server.controller');
  app.get('/',index.render);
};