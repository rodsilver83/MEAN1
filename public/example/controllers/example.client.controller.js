/**
 * Created by Rodrigo on 7/5/16.
 */
angular.module('example').controller('ExampleController', ['$scope',
  'Authentication',
  function($scope, Authentication) {
    $scope.authentication = Authentication;
    //$scope.name = Authentication.user ? Authentication.user.fullName : 'MEAN Application';
  }
]);