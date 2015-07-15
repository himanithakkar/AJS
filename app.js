(function() {
 	var app = angular.module('gemStore', []);
	app.controller('StoreController', function() {
		this.product = gem;
	});

	var gem = {
		name: 'xyz',
		price: 150000,
	}
})();