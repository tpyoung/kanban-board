'use strict';


(function() {

  var myApp = angular.module('kanban')

  .controller('LoginController', ['$scope', '$document', '$window', '$location','LoginService',
    function($scope, $document, $window, $location, LoginService) {

      $scope.loginUser = (function(res) {

      LoginService.login(res).then(function(res) {
        console.log('coming from services - routes - database!!', res.data);
           if(res.data){
              // $window.sessionStorage.setItem("user", JSON.stringify(res.data));
              $scope.user = res.data;
              $window.location.href="/";
            }
        });

    });



    }]);

}());

