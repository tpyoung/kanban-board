'use strict';

(function() {

  angular.module('kanban')

    .service('TaskService', ['$http', function TaskService($http) {

      this.getTasks = function() {
        return $http({
          method: 'GET',
          url: '/tasks'
        });
      };
      this.addTask = function(task) {
        var data = {
          title : task.title,
          author : task.author,
          dueDate : task.dueDate,
          status : task.status
        };
        var config = {
          headers : {
            'Content-Type': 'application/json'
          }
        };
        return $http.post('/tasks', data, config);
      };

      this.editTask = function(id, field, update) {
        var data = {
          id: id,
          field: field,
          update: update
        };
        var config = {
          headers : {
            'Content-Type': 'application/json'
          }
        };
        return $http.put('/tasks', data, config);
      };




    }]);//end of service
}());