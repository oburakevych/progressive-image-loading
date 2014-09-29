'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', [function() {
	var image = new Image();
	image.onload = function() {
		var imageElement = angular.element(document.getElementById("noImage4"));
		imageElement.attr('src', image.src);
	}

	image.src = "https://raw.githubusercontent.com/oburakevych/progressive-image-loading/master/app/images/avatar-1260x1600xoriginal.jpg";
}]);