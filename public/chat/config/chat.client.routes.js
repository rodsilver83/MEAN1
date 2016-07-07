/**
 * Created by Rodrigo on 7/7/16.
 */
angular.module('chat').config(['$routeProvider',
  function($routeProvider){
    $routeProvider.when('/chat', {
      templateUrl: 'chat/views/chat.client.view.html'
    });
  }
]);