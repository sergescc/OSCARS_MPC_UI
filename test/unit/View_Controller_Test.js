/*
Tests to test the ui View controller. 
*/



describe('Tests the View Controller', function() { 

	beforeEch(module('OSCARS_MPC_UI'));

	var viewController;
	var scope;


	beforeEach(inject(function($controller, $rootScope) {

		scope = $rootScope.$new();
		viewController = $controller('viewCtrl', { $scope: scope });

	}));

	it('should togle betweeen navBar closed and open', function () {
		expect(scope.toggleNavBar).tobe(
			)
	})
})