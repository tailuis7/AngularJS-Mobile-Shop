myApp.config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix("!");

	//Config router
	$routeProvider.when("/phones", {
		templateUrl: "views/products.html"
	}).otherwise({
		redirectTo: "/phones"
	});
}]);