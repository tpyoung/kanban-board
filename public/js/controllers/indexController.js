'use strict';

(function() {

var app =  angular.module('kanban')

    .controller('IndexController', ['$scope', '$http', '$document', 'IndexService',
      function($scope, $http, $document, IndexService) {

        $scope.toggle = true;

        $scope.toggleForm = function () {
          IndexService.toggleForm();
        };
  }]);
})();
