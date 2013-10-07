'use strict';//this is for using strict mode according to EMCA standards
/* Quick ref api for JASMINE
https://github.com/pivotal/jasmine/wiki/Matchers */

/* jasmine specs for controllers go here */
// defining our matchers
describe("vivoviz controllers", function () {
 
    //beforeEach(module('vivoviz')); loading our controllers.js file so no need, may need to modularize later

 
    describe("SkillsCtrl", function () {
 
        var scope, httpBackend, http, controller;
        beforeEach(inject(function ($rootScope, $controller, $httpBackend, $http) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            http = $http;
            controller = $controller;
            httpBackend.when("GET", "/api/movies").respond([{}, {}, {}]);
        }));
       
        it('should GET movies', function () {
            httpBackend.expectGET('/api/movies');
            controller('MoviesController', {
                $scope: scope,
                $http: http
            });
            httpBackend.flush();
        });
    });
});
