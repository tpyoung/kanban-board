'use strict';


(function() {

  angular.module('kanban')

    .controller('MainController', ['$scope', '$http', 'TaskService',
      function($scope, $http, TaskService) {

        $scope.tasks = [];
        TaskService.getTasks().then(function(res) {
          $scope.tasks = res.data;
        });
        $scope.addTask = (function (res) {
        TaskService.addTask(res).then(function(res) {
          $scope.tasks.push(res.data);
          });
        });

        $scope.editTask = function(id, field, update) {
        TaskService.editTask(id, field, update).then(function(res) {
          $scope.tasks = res.data;
          });
        };

        $scope.deleteTask = function(id) {
          TaskService.getTasks().then(function(req, res) {

            var taskArray = req.data;

            taskArray.forEach(function(element, index) {
              if(element.id === id) {
                var deleteTargetIndex = index;
                console.log('deleteTarget', deleteTargetIndex);
            $scope.tasks.splice(deleteTargetIndex, 1);
              }
            })

            // TaskService.deleteTask(id).then(function(res) {
            //   $scope.tasks.splice(deleteTargetIndex, 1);
            // });
          })
           ;

        };

      }]);
}());