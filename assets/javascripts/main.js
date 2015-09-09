var app = angular.module('minmax', [ ]);

app.controller('MainMaxCtrl', function($scope){
	$scope.formModel = {};

	$scope.onSubmit = function (){
		console.log("Hey im submitted!");
		console.log($scope.formModel);
	}

})