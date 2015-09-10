var app = angular.module('minmax', [ 
	'jcs-autoValidate'
]);

app.controller('MainMaxCtrl', function($scope, $http){
	$scope.formModel = {};

	$scope.onSubmit = function (){

		console.log("Hey im submitted!");
		console.log($scope.formModel);

		// $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
		// success(function(data){
		// 	console.log("--------> OK ")
		// }).error(function(data){
		// 	console.log("Fail <-------- ")
		// });


	}

})