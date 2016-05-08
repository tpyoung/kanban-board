'use strict';


(function() {

var app =  angular.module('kanban')

    .controller('MainController', ['$scope', '$http', 'TaskService', 'dragulaService',
      function($scope, $http, TaskService, dragulaService) {

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
      TaskService.deleteTask(id).then(function(res) {
         $scope.tasks = res.data;
        });
      };

      $scope.$on('first-bag.drag', function (e, el) {
        console.log('drag');
      });

      $scope.$on('first-bag.drop', function (e, el) {
        console.log(e);
        console.log(el);
      });

      $scope.$on('first-bag.over', function (e, el, container) {
        console.log('over');
      });

      $scope.$on('first-bag.out', function (e, el, container) {
        console.log('out');
      });
  }]);
}());
