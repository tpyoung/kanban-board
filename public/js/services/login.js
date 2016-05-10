'use strict';


(function() {

angular.module('kanban')


.service('LoginService', ['$http', function LoginService($http) {
   this.login = function(user) {
console.log('service', user);

      var data = {
        username : user.username,
        password: user.password
      };

      var config = {
          headers : {
            'Content-Type': 'application/json'
      }

    };
      console.log('login', data);

    return $http.post('/login', data, config);
  };



}]);


}());