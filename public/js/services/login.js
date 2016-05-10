'use strict';


(function() {

angular.module('kanban')


.service('LoginService', ['$http', function LoginService($http) {
   this.login = function(existingUser) {
console.log('service', existingUser);

      var data = {
        username : existingUser.username,
        password: existingUser.password
      };

      var config = {
          headers : {
            'Content-Type': 'application/json'
      }
    };
    var existingUser =  $http.post('/login', data, config);
    return existingUser;
    };
  }]);
}());