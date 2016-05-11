'use strict';

(function() {
angular.module('kanban')
.service('LoginService', ['$http', function LoginService($http) {

  this.login = function(existingUser) {
    console.log('loginService', existingUser);
      var data = {
        username : existingUser.username,
        password: existingUser.password
      };
      var config = {
          headers : {
            'Content-Type': 'application/json'
          }
      };
      return  $http.post('/login', data, config);
    };
  }]);
}());