'use strict';


(function() {

  var myApp = angular.module('kanban')

  .controller('LoginController', ['$scope', '$document', '$http', 'LoginService',
    function($scope, $document, $http, LoginService) {

      $scope.loginUser = (function(res) {

      LoginService.login(res)
      .then(function(res) {
        console.log('coming from services - routes - database!!', res.data);
        //res.data store in local storage
        });

    });



    }]);

}());

