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
        // var rawDate = JSON.stringify(task.dueDate);
        // var myDate = rawDate.substring(0,11);

        console.log('STRING', task.dueDate)

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

      this.deleteTask = function(id) {

        var config = {
          data: {
            id: id
          },
          headers : {
            'Content-Type': 'application/json'
          }
        };
        return $http.delete('/tasks', config);
      };
    }]);//end of service
}());