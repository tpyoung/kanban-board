'use strict';


(function() {

  var myApp = angular.module('kanban')

  .controller('UserController', ['$scope', '$window', '$location', '$document', '$http', 'UserService',
    function($scope, $window, $location, $document, $http, UserSevice) {

      $scope.users = [];

      $scope.addUser = (function(res) {

        UserSevice.addUser(res).then(function(res) {

          $scope.users.push(res);
          $location.path('/');

        });

      });

    }]);

}());


