'use strict';//this is for using strict mode according to EMCA standards
/* Quick ref api for JASMINE
https://github.com/pivotal/jasmine/wiki/Matchers */

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

    describe('PhoneListCtrl', function(){

        it('should create "phones" model with 3 phones', function() {
            var scope = {},
                ctrl = new PhoneListCtrl(scope);
            expect(scope.phones.length).toBe(5);
        });
    });
});
