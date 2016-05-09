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

      $scope.$on('first-bag.drop', function (e, el) {
       console.log('drop');
       var idText = (el[0].innerHTML);
       console.log(idText);
        var idStart = idText.indexOf('@') + 1;
        var idEnd = idText.indexOf('@', idStart);
        var id = idText.substring(idStart, idEnd);
        console.log(id);

        var statusText = (el[0].parentNode.innerHTML);
        var statusstart = statusText.indexOf("{status: '") + 10;
        var statusend = statusText.indexOf("'", statusstart);
        var update = statusText.substring(statusstart, statusend);
        console.log(update);
        var field  = 'status';

        TaskService.editTask(id, 'status', update).then(function(res){
          $scope.tasks = res.data;
        })
        .catch(e);
    });
  }]);
}());
