myApp.config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix("!");

	//Config router
	$routeProvider.when("/phones", {
		templateUrl: "views/products.html"
	}).when("/phones/:phoneId", {
		templateUrl: "views/product-detail.html"
	}).when("/quanlysanpham", {
		templateUrl: "views/manage-products.html"
	}).when("/themsanpham", {
		templateUrl: "views/add-product.html"
	}).otherwise({
		redirectTo: "/phones"
	});
}]);