var MapApp = angular.module('MapApp', ['uiGmapgoogle-maps']);

MapApp.controller('MapAppCtrl',['$scope', function($scope){

	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

}]);