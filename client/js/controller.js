angular.module('HairSmoothieBar.controllers', [])

    .controller('BlogController', [])


    .controller('AppopintmentsController', [])


    .controller('CheckoutController', [])

    .controller('ProductsController', ['$scope', '$location', 'Products', function ($scope, $location, Products) {
        $scope.products = Products.query();
    }])

    .controller('ProductDetailController', ['$scope', '$location', '$routeParams', 'Products', function ($scope, $location, $routeParams, Products) {
        Products.get({ id: $routeParams.id }, function (success) {
            $scope.product = success;
        }, function (err) {
            console.log(err);
        })
}])

    .controller('ServicesController', ['$scope', '$location', 'Service', function ($scope, $location, Service) {

        $scope.service = Services.query();
    }]);

// app
// $scope.service = Service.get({ id: $routeParams.id }, function (success) {
//     $scope.service = success;
// });

// }