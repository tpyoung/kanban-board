'use strict';


(function() {

  angular.module('kanban')

    .controller('MainController', ['$scope', '$http', 'TaskService',
      function($scope, $http, TaskService) {

        $scope.tasks = [];

        TaskService.getTasks().then(function(response) {
          console.log(response);
          $scope.tasks = response.data;
        });

      }]);



}());