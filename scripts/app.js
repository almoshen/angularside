angular
	.module('adminPanel', ['ngMaterial','ui.router'])
	.config(function($mdThemingProvider, $stateProvider){


		$mdThemingProvider.theme('default')
			.primaryPalette('cyan')
			.accentPalette('orange');

	    $stateProvider
	        .state('cards', {
	        	url:'/',
	        	templateUrl:'/components/cards.html',
	        	controller: 'cardsCtrl'
	        	
	    })
	        .state('login', {
	        	url:'/login',
	        	templateUrl:'/components/login/login.html',
	        	controller:'loginCtrl'
	        })
	        .state('dashboard',{
	        	url:'/dashboard',
	        	templateUrl:'/components/dashboard/dashboard.html',
	        	controller:'dashboardCtrl'
                
	        });



	})
