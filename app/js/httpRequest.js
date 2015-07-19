(function(){
	var httpRequest = angular.module('httpRequest', [])
	.config(function ($routeProvider
		.when('/', {
			templateUrl:
		})))

	httpRequest.controller('NavBarCtrl', function(&scope)
	{


	});

	httpRequest.service('MPC_Caller', function task($http, $q, $rootScope)
	{
		var MPC_Caller = this;
		MPC_Caller.requests = {};

		MPC_Caller.getPastRequests = function(){

			var defer = $q.defer();

			$http.get($rootScope.endPoint + '/pastRequests')
			.success(function(response)
			{
				MPC_Caller.requests = response;
				defer.resolce(response);
			})
			.error(function(err, status){
				defer.reject(err);

			})

			return.defer.promise;
		}

	

		MPC_Caller.postRequest = function(request)
		{
			var defer = $q.defer();

			$http.post($rootScope.endpoint + '/postRequest', request)
			.success(function(response)
			{
				defer.resolve(response);

			})
			.error(function(err, status){
				defer.recject(err);
			})

			return defer.promise;
		}

		task.cancelRequest = function(gri)
		{

			var defer= $q.defer();
			$http.delete($rootScope.endpoint + '/deleteTask' + gri)
			.success(function(response){
				defer.resolve(respond);
			})
			.error(function(err, status){
				defer.reject(err);
			})

			return defer.promise;

		}

		return task;

	});

})();