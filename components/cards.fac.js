(function(){

	"use strict";

	angular
		.module('adminPanel')
		.factory('cardsFactory', function($http){

			 function getCards(){
			 	return $http.get('data/stars.json');
			 }

			 return {
			 	getCards: getCards
			 }

		});

})();