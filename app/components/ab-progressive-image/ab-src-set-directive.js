'use strict';

angular.module('myApp.abSrcSet.abSrcSet-directive', [])

.directive('abSrcSet', ['$timeout', function($timeout) {
	return {
		restrict: 'A',
		link: function($scope, elm, attrs) {
			$scope.srcSet = attrs.abSrcSet.split(",");
			$scope.currentIndex = 0;

			var init = function() {
				elm.removeAttr('src'); // necessary to avoid infinite compile loop
				elm.on('load', setImageSourceByIndex);

				setImageSourceByIndex();
			}

			var setImageSourceByIndex = function() {
				if ($scope.srcSet.length > $scope.currentIndex) {
					if ($scope.currentIndex == 0) {
						// Load first (the smallest) image right away
						// We don't want to spend any time waiting for events to propagate
						elm.attr('src', $scope.srcSet[$scope.currentIndex]);
					} else {
						// Pre load every image except the first one, time is not of a concern anymore
						var image = new Image();
						image.onload = function() {
							$timeout(function() {
								elm.attr('src', image.src);
							}, 200 * $scope.currentIndex);
						}

						image.src = $scope.srcSet[$scope.currentIndex];
					} 
					
					$scope.currentIndex++;
				}
			}

			init();
		}
	}
}]);
