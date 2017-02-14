myApp.controller("productDetailController", ['$scope', '$rootScope', '$http', '$routeParams', 'ProductFactory', function($scope, $rootScope, $http, $routeParams, ProductFactory) {
    ProductFactory.productDetail($routeParams.phoneId).success(function(response) {
        $scope.phone = response;
        console.log($scope.phone);
    }).error(function() {
        console.log("Fix");
    });
}]);