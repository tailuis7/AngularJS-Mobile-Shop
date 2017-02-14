myApp.factory("ProductFactory", function($http) {
	return {
		list: function() {
            return $http({
                url: 'http://localhost/server_angularjs/api/products.php',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        },
	};
});