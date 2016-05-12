'use strict';

(function() {
  angular.module('kanban')
  .service('UserService', ['$http', function UserService($http) {

    this.addUser = function(user) {
      var data = {
        username : user.username,
        password: user.password
      };
      var config = {
        headers : {
          'Content-Type': 'application/json'
        }
      };
      return $http.post('/signUp', data, config);
    };
  }]);
}());