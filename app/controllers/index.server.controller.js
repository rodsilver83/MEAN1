/**
 * Created by Rodrigo on 2/17/16.
 */

exports.render = function(req,res){
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();

  res.render('index',{
    title: 'Hello World',
    user: JSON.stringify(req.user)
  });
};
