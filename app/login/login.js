'use strict';

angular.module('fire.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

// and use it in our controller
.controller("LoginCtrl", ["$scope", "Auth", function($scope, Auth) {
  $scope.auth = Auth;
  $scope.user = $scope.auth.$getAuth();
}])


