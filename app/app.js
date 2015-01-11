'use strict';

// Declare app level module which depends on views, and components
var fire = angular.module('fire', [
  'ngRoute',
  'fire.home',
  'fire.login',
  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);



