(function(){
	var MapApp = angular.module('MapApp', ['uiGmapgoogle-maps']);

	MapApp.controller('MapAppCtrl',['$scope', function($scope){

		$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 5 };
		$scope.styles = [ { "stylers": [ { "hue": "#00ddff" },
		 { "saturation": -70 } ] },
		 { "featureType": "road.local", "stylers": [ { "visibility": "off" } ] },
		 { "featureType": "road.arterial", "stylers": [ { "visibility": "off" } ] },
		 { "featureType": "road.highway", "stylers": [ { "visibility": "off" } ] },
		 { "featureType": "administrative.province", "stylers": [ { "visibility": "off" } ] } ];


	}]);


	MapApp.directive('topographyMap', function() {

		return {
			restrict: 'E',
			templateUrl: './src/topography-map.html',
			controller: 'MapAppCtrl'
		};
	});
})();
(function(){
	var OSCARS_MPC_UI = angular.module('OSCARS_MPC_UI',['MapApp']);

	OSCARS_MPC_UI.controller('viewCtrl', viewCtrl);

	function viewCtrl() 
	{

		this.inView = "splash";

		this.loginButton = {
			name: 'Login',
			isDisabled: false
		};

		this.registerButton = {
			name: 'Register'
		};

		this.navBarState = 'navBarClosed';
		this.mapNavState =  'mapClosedNav'

	}

	viewCtrl.prototype.login = function() 
	{
		this.inView = 'login';
		this.theLoginButton.isDisabled = true;
	};

	viewCtrl.prototype.register = function() 
	{
		this.inView = 'register';
	};

	viewCtrl.prototype.logout = function()
	{
		this.inView = 'splash';
	};
	
	viewCtrl.prototype.toggleNavBar = function()
	{
		if (this.navBarState === 'navBarClosed')
		{
			this.navBarState = 'navBarOpen';
			this.mapNavState = 'mapOpenNav';
		}
		else
		{
			this.navBarState = 'navBarClosed';
			this.mapNavState = 'mapClosedNav';
		}
	};
})();