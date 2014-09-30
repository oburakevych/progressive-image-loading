'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', function($scope) {
	var image = new Image();
	var startTime = Date.now();
	image.onload = function() {
		var imageElement = angular.element(document.getElementById("noImage"));
		imageElement.attr('src', image.src);
		$scope.loadTime = Date.now() - startTime;
	}

	image.src = "https://raw.githubusercontent.com/oburakevych/progressive-image-loading/master/app/images/avatar-1260x1600x100-copy3.jpg";
}]);