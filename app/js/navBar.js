(function(){
	var NavBar = angular.module('NavBar',[]);

	NavBar.controller('NavBarCtrl', ['$scope',])

	NavBar.directive('navBarDirective', ['$http','$scope', function($scope) {
		return 
		{
			restrict: 'E',
			templateUrl: './src/nav-bar-directive.html'
		});
})();