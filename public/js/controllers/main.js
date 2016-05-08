'use strict';


(function() {

  angular.module('kanban')

    .controller('MainController', ['$scope', '$http', 'TaskService',
      function($scope, $http, TaskService) {

        $scope.tasks = [];
        TaskService.getTasks().then(function(res) {
          console.log(res);
          res.data.forEach(function(element) {
            var date = new Date(element.dueDate);
            console.log('THE DATE', date);
            var displayDate = (date.getMonth()+1) + '-' + date.getDate() + '-' + date.getFullYear();
            element.dueDate = displayDate;
          });
          $scope.tasks = res.data;
        });
        $scope.addTask = (function (res) {
          var date = new Date(res.dueDate);
          var myDate = (date.getMonth()+1) + '-' + date.getDate() + '-' + date.getFullYear();
        TaskService.addTask(res).then(function(res) {
          res.data.dueDate = myDate;
          $scope.tasks.push(res.data);
          });
        });

        $scope.editTask = function(id, field, update) {
        TaskService.editTask(id, field, update).then(function(res) {
          $scope.tasks = res.data;
          });
        };

        $scope.deleteTask = function(id) {

            TaskService.deleteTask(id).then(function(res) {
             $scope.tasks = res.data;
            });
        };
      }]);
}());