myApp.controller("productsController", ['$scope', '$rootScope', '$http', '$routeParams', 'ProductFactory', function($scope, $rootScope, $http, $routeParams, ProductFactory) {
	ProductFactory.list().success(function(response) {
        $scope.phones = response;
        // console.log($scope.phones);
    }).error(function() {
        console.log("Fix");
    });
}]);