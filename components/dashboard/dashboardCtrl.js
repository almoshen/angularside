(function(){
	
	"use strict";

	angular
		.module('adminPanel')
		.controller('dashboardCtrl', function($scope, $http, cardsFactory, $mdSidenav, $mdDialog, $mdToast, $location){
                cardsFactory.getCards().then(function(response){
				$scope.cards = response.data;
                $scope.categories = getCategories($scope.cards);
                 
			});

            $scope.submit = function(){
            	var uname = $scope.username;
            	var password = $scope.password;
            	if ($scope.username == 'ngStar' && $scope.password == 'ngStars') {
            		$location.path('/dashboard');
            	} else {
            		alert('Wrong');
            	}
            }

            $scope.logOut = function(){
            	$location.path('/');
            }
                
                $scope.showHints = true;

            $scope.openSidebar = function(){
		        $mdSidenav('left').open();
			}

			$scope.closeSidebar = function(){
				$mdSidenav('left').close();
			}

			$scope.saveCard = function(card){
				if (card) {
					
					$scope.cards.push(card);
					$scope.card = {};
					$scope.closeSidebar();
					showToast("Card saved!");
				}
			}

			$scope.editCard = function(card) {
				$scope.editing = true;
				$scope.openSidebar();
				$scope.card = card;
			}

			$scope.saveEdit = function(){
				$scope.editing = false;
				$scope.card = {};
				$scope.closeSidebar();
				showToast("Edit saved!");
			}

			$scope.deleteCard = function(event, card){

				var confirm = $mdDialog.confirm()
								.title('Are you sure to delelte ' + card.title + '?')
								.ok('Yes')
								.cancel('No')
								.targetEvent(event);
				$mdDialog.show(confirm).then(function(){
					var index = $scope.cards.indexOf(card);
					$scope.cards.splice(index, 1);
				});
				
			}

			function showToast(message) {
				$mdToast.show(
						$mdToast.simple()
							.content(message)
							.position('top, right')
							.hideDelay(3000)
					);
			}
            
            function getCategories(cards) {
				var categories = [];

				angular.forEach(cards, function(item){
					angular.forEach(item.categories, function(category){
						categories.push(category);
					});
				});

				return _.uniq(categories);
			}

            }); 
			

		})();