'use strict';


(function() {

  angular.module('kanban')

    .controller('MainController', ['$scope', '$http', 'TaskService',
      function($scope, $http, TaskService) {

        $scope.tasks = [];
        TaskService.getTasks().then(function(res) {
          console.log(res);
          $scope.tasks = res.data;
        });
        $scope.addTask = (function (res) {
          console.log(res);
        TaskService.addTask(res).then(function(res) {
          $scope.tasks.push(res.data);
          });
        });

        $scope.editTask = function(id, field, update) {
          console.log('edit', id, field, update);
        TaskService.editTask(id, field, update).then(function(res) {
          // $scope.tasks = res.data;
          });
        };
      }]);
}());