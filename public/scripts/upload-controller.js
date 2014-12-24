'use strict';

var gifboard = angular.module('gifboard', []);

gifboard.controller('uploadController', function($scope, $http) {
	$scope.submitForm = function() {
		if (true === $scope.upload.$valid) {
			$http.post('/upload/', {
					url: $scope.url
				}).success(function(result) {
					console.log(result);
				});

		}
	};
});
