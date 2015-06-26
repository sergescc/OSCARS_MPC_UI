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