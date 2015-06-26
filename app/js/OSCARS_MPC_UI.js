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