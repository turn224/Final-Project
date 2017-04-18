angular.module('HairSmoothieBar.controllers', ['ngResource', 'ngRoute'])

app.controller('BlogController', [])


app.controller('AppopintmentsController', [])


app.controller('CheckoutController', [])

app.controller('ProductsController', ['$scope', '$location', 'Products', function ($scope, $location, Products) {
    $scope.products = Products.query();
}])

app.controller('ProductDetailController', ['$scope', '$location', '$routeParams', 'Products', function ($scope, $location, $routeParams, Products) {
    $scope.product = Products.get({ id: $routeParams.id }, function (success) {
        $scope.product = success;
});

app.controller('ServicesController', ['$scope', '$location', 'Service', function ($scope, $location, Service) {

    $scope.service = Services.query();
}]);

app.controller('ServiceDetailController', ['$scope', '$location', '$routeParams', 'Service', function ($scope, $location, $routeParams, Service) {

    $scope.service = Service.get({ id: $routeParams.id }, function (success) {
        $scope.service = success;
    });

}]);
}]);