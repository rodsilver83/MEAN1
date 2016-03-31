/**
 * Created by Rodrigo on 3/11/16.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    index: true,
    match: /.+\@.+\.+/
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: String,
  created: {
    type: Date,
    default: Date.now
  },
  website: {
    type: String,
    get: function(url) {
      if (!url) {
        return url;
      } else {
        if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
          url = 'http://' + url;
        }
        return url;
      }
    }
  }
});

UserSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
  var splitName = fullName.split(' ');
  this.firstName = splitName[0] || '';
  this.lastName = splitName[1] || '';
});

//Define custom static model method
UserSchema.statics.findOneByUsername = function (username, callback) {
  this.findOne({ username: new RegExp(username, 'i') }, callback);
};

UserSchema.set('toJSON', { getters: true, virtuals: true });

mongoose.model('User', UserSchema);
