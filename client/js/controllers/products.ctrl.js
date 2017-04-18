var app = angular.module('HairSmoothieBar.controllers', []);


app.controller('ProductsController', ['$scope', '$location', 'Products', function ($scope, $location, Products) {

    $scope.product = Products.query();

    $scope

}]);

app.controller('ProductDetailController', ['$scope', '$location', '$routeParams', 'Product', function ($scope, $location, $routeParams, Products) {

    $scope.product = Products.get({ id: $routeParams.id }, function (success) {
        $scope.products = success;
    });

}]);