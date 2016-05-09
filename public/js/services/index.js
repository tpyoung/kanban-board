'use strict';

(function() {

  angular.module('kanban')

    .service('IndexService', ['$http', '$document', function IndexService($http, $document) {

      this.toggleForm = function() {
        this.formIsActive = !this.formIsActive;
        console.log('yo yo');
      };
      this.formIsActive = false;
    }]);//end of service
}());