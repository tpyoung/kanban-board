'use strict';

(function() {
  angular.module('kanban')
    .service('IndexService', ['$http', '$document', function IndexService($http, $document) {

      this.formIsActive = false;

      this.toggleForm = function() {
        this.formIsActive = !this.formIsActive;
      };
    }]);
}());