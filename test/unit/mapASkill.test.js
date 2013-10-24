'use strict';

describe('Map A Skill Controllers', function() {
    describe('MapASkillCtrl', function(){
       it('should get a list of people and skills', function(){
          var scope = {},
            ctrl = $controller('MapASkillCtrl', { $scope: scope });
            expect(scope.peoplelist.length).toBeGreaterThan(5);
            expect(scope.skilllist.length).toBeGreaterThan(5);
       });
    }); 
});
