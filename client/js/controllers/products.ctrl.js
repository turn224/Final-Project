var app = angular.module('HairSmoothieBar.controllers', []);


app.controller('ProductsController', ['$scope', '$location', 'Product', function ($scope, $location, Product) {

    $scope.product = Products.query();

    $scope

}]);

app.controller('ProductDetailController', ['$scope', '$location', '$routeParams', 'Product', function ($scope, $location, $routeParams, Product) {

    $scope.product = Product.get({ id: $routeParams.id }, function (success) {
        $scope.product = success;
    });

}]);