myApp.directive("phones", ["ProductFactory", function(ProductFactory) {
	return {
		restric: "E",
		scope: {
            phoneList: '=list'
        },
        templateUrl: 'views/product-info.html',
	};
}]);