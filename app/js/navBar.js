(function(){
	var NavBar = angular.module('NavBar',[]);

	NavBar.controller('NavBarCtrl', ['$scope',])

	NavBar.directive('navBarDirective', ['$http','$scope', function($scope) {
		return 
		{
			restrict: 'E',
<<<<<<< HEAD
			templateUrl: './src/nav-bar-directive.html',
			controller: 'NavBarCtrl'
	});
=======
			templateUrl: './src/nav-bar-directive.html'
		});
>>>>>>> 2b6d94d86439731a008a7ba8077e9da5b7de2750
})();