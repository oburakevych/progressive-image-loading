'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', [function() {
	var image = new Image();
	image.onload = function() {
		var imageElement = angular.element(document.getElementById("noImage"));
		imageElement.attr('src', image.src);
	}

	image.src = "https://raw.githubusercontent.com/oburakevych/progressive-image-loading/master/app/images/avatar-1260x1600x100.jpg";
}]);