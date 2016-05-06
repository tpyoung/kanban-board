'use strict';

(function() {

  angular.module('kanban')

    .service('TaskService', ['$http', function TaskService($http) {

      this.getTasks = function() {
        return $http({
          method: 'GET',
          url: '/task'
        });
      };


    }]);//end of service


}());