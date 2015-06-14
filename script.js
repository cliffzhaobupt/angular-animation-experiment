'use strict';

angular.module('animationExperiment', ['ngRoute', 'ngAnimate'])
//route configuartion
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/ngReapeatAnim', {
      templateUrl: 'ng-repeat-anim.html',
      controller: 'NgRepeatAnimCtrl'
    })
    .when('/ngIfAnim', {
      templateUrl: 'ng-if-anim.html',
      controller: 'NgIfAnimCtrl'
    })
    .when('/ngModelAnim', {
      templateUrl: 'ng-model-anim.html',
      controller: 'NgModelAnimCtrl'
    })
    .otherwise({
      redirectTo: '/ngReapeatAnim'
    });
}])
//empty controllers
.controller('NgRepeatAnimCtrl', [function() {}])
.controller('NgIfAnimCtrl', [function() {}])
.controller('NgModelAnimCtrl', [function() {}]);
