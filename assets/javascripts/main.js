var app = angular.module('minmax', [ 
	'jcs-autoValidate',
	'angular-ladda'
]);

app.controller('MainMaxCtrl', function($scope, $http){
	$scope.formModel = {};
	$scope.submitting = false;

	$scope.onSubmit = function (){
		$scope.submitting = true;
		console.log("Hey im submitted!");
		console.log($scope.formModel);

		$http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
		success(function(data){
			console.log("--------> OK ")
			$scope.submitting = false;
		}).error(function(data){
			console.log("Fail <-------- ")
			$scope.submitting = false;
		});


	}

})