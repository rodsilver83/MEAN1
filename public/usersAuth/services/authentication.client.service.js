/**
 * Created by Rodrigo on 7/5/16.
 */
angular.module('usersAuth').factory('Authentication', [
  function() {
    this.user = window.user;
    return {
      user: this.user
    };
  }
]);