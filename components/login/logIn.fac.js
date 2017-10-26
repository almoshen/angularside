(function(){

	"use strict";

	angular
		.module('adminPanel')
		.factory('loginFactory', function($http){

			 function logIn(){
			 	return $http.get('data/logIn.json');
			 }

			 return {
			 	logIn: logIn
			 }

		});

})();