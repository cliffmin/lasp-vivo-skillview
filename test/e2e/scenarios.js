'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */
//IMPORTANT: Remember when counting tables the title counts as one

describe('LEMR app navigation', function () {

	beforeEach(function () {
		browser().navigateTo('../../index.html#/');
	});
	it('should redirect index.html to index.html#/', function () {
		browser().navigateTo('../../index.html');
		expect(browser().location().url()).toBe('/');
	});
	it('Logo click redirect us to the home page', function () {
		element('#logo').click();
		expect(browser().location().url()).toBe('/');
	});
	it('View all skills click should redirect to root page', function () {
		element('#viewAllSkills').click();
		expect(browser().location().url()).toBe('/');
	});
	it('Add a skill click should redirect us to #/mapaskill page', function () {
		element('#mapASkills').click();
		expect(browser().location().url()).toBe('/mapaskill');
	});

});
