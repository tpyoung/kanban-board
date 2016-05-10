'use strict';


(function() {

  var myApp = angular.module('kanban')

  .controller('LoginController', ['$scope', '$document', '$http', 'LoginService',
    function($scope, $document, $http, LoginService) {

      console.log('here');
      $scope.loginUser = function(res) {
        console.log('birdyy', res);
      LoginService.login(res).then(function(res) {
        console.log('going in database!!', res);

        });

    };



    }]);

}());

