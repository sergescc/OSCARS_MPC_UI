(function(){
	var NavBar = angular.module('NavBar',[]);

	NavBar.conrtoller('NavBarCtrl', ['$scope',])

	NavBar.directive('navBarDirective', ['$http','$scope', function($scope) {
		return 
		{
			restrict: 'E',
			templateUrl: './src/nav-bar-directive.html',
			controller: //to add controller

	});
})();