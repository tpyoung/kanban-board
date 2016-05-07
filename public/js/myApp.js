'use strict';

(function() {

  angular.module('kanban', ['ngRoute', angularDragula(angular)]);

  var myApp = angular.module('kanban');

  myApp
    .config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider){
      $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
      });

      $routeProvider
        .when('/', {
          templateUrl : 'views/main.html',
          controller  : 'MainController'
        });

    }])
    .run([function(){

    }]);


}());