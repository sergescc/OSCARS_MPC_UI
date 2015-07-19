(function(){
	var OSCARS_MPC_UI = angular.module('OSCARS_MPC_UI',['MapApp', 'ui.bootstrap']);

	OSCARS_MPC_UI.controller('viewCtrl', [ '$scope' , '$http' , viewCtrl ]);

	function viewCtrl( $scope , $http) 
	{

		this.inView = "splash";

		this.user = {
			name: "default",
			passwd: "test"
		}

		this.loginButton = {
			name: 'Login',
			isDisabled: false
		};

		this.registerButton = {
			name: 'Register'
		};

		this.navBarState = 'navBarClosed';
		this.mapNavState =  'mapClosedNav'

	};

	viewCtrl.prototype.login = function() 
	{
		this.inView = 'login';
		this.loginButton.isDisabled = true;
		
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

	angular.module('OSCARS_MPC_UI').controller('LoginModalCtrl', function ($scope, $modal, $log) {

  		$scope.user = {
  			name: "default",
  			passwd: "admin",
  		};

  		$scope.animationsEnabled = true;

  		$scope.open = function (size) {

    	var modalInstance = $modal.open({
      	animation: $scope.animationsEnabled,
      	templateUrl: 'views/LoginModalView.html',
      	controller: 'LoginInstanceCtrl',
     	size: size,
      	resolve: {
        users: function () {
          return $scope.user;
        }
      }
    });

   		modalInstance.result.then(function (user) {
      	$scope.user = user;
    	}, function () {
      $log.info('Modal dismissed at: ' + new Date());
    	});
  	};

});


angular.module('OSCARS_MPC_UI').controller('LoginInstanceCtrl', function ($scope, $modalInstance) {

  $scope.user = {
  	name: "defauls",
  	passwd: "admin"
  };


  $scope.ok = function () {
    $modalInstance.close($scope.user);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

})();