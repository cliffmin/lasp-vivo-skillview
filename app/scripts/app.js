'use strict';

/* App Module */
var skillsModule = angular.module('skillsModule', ['ngDragDrop', 'mapASkillFilters', 'ui.bootstrap']); //dependencies go inside the square brackets

skillsModule.config(function ($routeProvider, $httpProvider) {
$routeProvider. //this controls navigation within our app
when('/', { controller: 'AllSkillsCtrl', templateUrl: 'views/all-skills.html' }).
when('/map-a-skill', { controller: 'MapASkillCtrl', templateUrl: 'views/map-a-skill.html' }).
otherwise({ redirectTo: '/' });

//enable crossdomain requests
$httpProvider.defaults.withCredentials = true;
delete $httpProvider.defaults.headers.common["X-Requested-With"];
delete $httpProvider.defaults.headers.post["Content-Type"];
});

