'use strict';


(function() {

  var app = angular.module('kanban')

  .controller('UserController', ['$scope', '$document', '$http', 'UserService',
    function($scope, $document, $http, UserSevice) {

      $scope.users = [];

      $scope.addUser = (function(res) {

        console.log('bird', res)
        UserSevice.addUser(res).then(function(res) {
          console.log('going in database', res)
          $scope.users.push(res);
        });
      });

    }]);

}());