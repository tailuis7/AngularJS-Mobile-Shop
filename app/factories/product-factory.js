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
        add: function(id, name) {
            return $http({
                method: 'POST',
                url: 'http://localhost/basic_angularjs/api/add_product.php',
                data: {
                    id: id,
                    name: name
                }
            });
        },
        productDetail: function(id) {
            return $http({
                method: 'GET',
                url: 'http://localhost/server_angularjs/api/product.php',
                //Truyền id để lọc
                params: {
                    id: id
                }
            });
        }
	};
});