'use strict';


(function() {

  var myApp = angular.module('kanban')

  .controller('LoginController', ['$scope', '$document', '$window', '$location','LoginService',
    function($scope, $document, $window, $location, LoginService) {

      $scope.loginUser = (function(res) {

      LoginService.login(res).then(function(res) {

           if(res.data !== 'false') {

              console.log('$window', $window);
              $window.location.href = "/";
            }
            else {
              $window.location.href = '/#/signUp';
            }

        });
    });

    }]);

}());

