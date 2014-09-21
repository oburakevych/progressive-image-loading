'use strict';

angular.module('myApp.abSrcSet.abSrcSet-directive', [])

.directive('abSrcSet', ['$timeout', function($timeout) {
	return {
		restrict: 'A',
		link: function($scope, elm, attrs) {
			$scope.srcSet = attrs.abSrcSet.split(",");
			$scope.currentIndex = 0;

			var time;

			var setImageSourceByIndex = function() {
				if ($scope.srcSet.length > $scope.currentIndex) {
					var newTime = Date.now();
					console.log(newTime - time + " " + $scope.srcSet[$scope.currentIndex]);
					elm.attr('src', $scope.srcSet[$scope.currentIndex]);
					$scope.currentIndex++;
					time = newTime;
				}
			}

			elm.removeAttr('src'); // necessary to avoid infinite compile loop
			elm.on('load', setImageSourceByIndex);

			setImageSourceByIndex();
		}
	}
}]);
