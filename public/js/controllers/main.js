'use strict';


(function() {

  angular.module('kanban')

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
          el.removeClass('ex-moved');
        });

        $scope.$on('first-bag.drop', function (e, el) {
          el.addClass('ex-moved');
        });

        $scope.$on('first-bag.over', function (e, el, container) {
          container.addClass('ex-over');
        });

        $scope.$on('first-bag.out', function (e, el, container) {
          container.removeClass('ex-over');
        });

    dragulaService.options($scope, 'first-bag', {
      revertOnSpill: true
    });
  }]);
}());
