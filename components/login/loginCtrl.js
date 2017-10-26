(function(){
	
	"use strict";

	angular
		.module('adminPanel')
		.controller('loginCtrl', function($scope, $location, loginFactory){
                  loginFactory.logIn().then(function(response){
                        $scope.login = response.data;
                  });

               $scope.submit = function(){
                  var uname = $scope.username;
                  var password = $scope.password;
                      for (var i=0; i<2; i++){
                        if ($scope.login[i].username == uname && $scope.login[i].password == password) {
                        $location.path('/dashboard');
                  } //else {
                      //  alert('Wrong');
                 // }
                      }  
                  
                  //if ($scope.username == 'ngStar' && $scope.password == 'ngStars') {
                  //      $location.path('/dashboard');
                  //} else {
                  //      alert('Wrong');
                  //}
           // }
            }

            $scope.logIn = function(){
            	$state.go('login');
            }
          })  
		})();