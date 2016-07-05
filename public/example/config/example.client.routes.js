/**
 * Created by Rodrigo on 7/5/16.
 */
angular.module('example').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'example/views/example.client.view.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);