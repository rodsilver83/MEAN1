/**
 * Created by Rodrigo on 7/6/16.
 */
angular.module('articles')
  .factory('Articles', ['$resource', function($resource){
  return $resource('api/articles/:articleId', {
    articleId: '@_id'
  },{
    update: {
      method: 'PUT'
    }
  });
}]);