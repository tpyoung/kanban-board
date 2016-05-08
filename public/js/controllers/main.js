'use strict';


(function() {

  angular.module('kanban')

    .controller('MainController', ['$scope', '$http', 'TaskService', 'dragulaService',
      function($scope, $http, TaskService, dragulaService) {

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
        // $scope.$on('bag-one.drag', function (e, el) {
        //   el.removeClass('ex-moved');
        // });

        // $scope.$on('bag-one.drop', function (e, el) {
        //   el.addClass('ex-moved');
        // });

        // $scope.$on('bag-one.over', function (e, el, container) {
        //   container.addClass('ex-over');
        // });

        // $scope.$on('bag-one.out', function (e, el, container) {
        //   container.removeClass('ex-over');
        // });

        dragulaService.options($scope, 'bag-one', {
          revertOnSpill: true
        });
      }]);
}());
