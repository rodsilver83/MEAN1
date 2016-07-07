/**
 * Created by Rodrigo on 7/5/16.
 */
var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName
  , ['ngResource','ngRoute','usersAuth','example','articles','chat']);

mainApplicationModule.config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);

if (window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName]);
});