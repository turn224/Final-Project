var app = angular.module('HairSmoothieBar', ['ngRoute', 'ngResource', 'HairSmoothieBar.controllers', 'HairSmoothieBar.factories', 'HairSmoothieBar.services']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: 'views/welcome.html'
            //    controller: 'WelcomeController'
        })
        .when('/services', {
            templateUrl: 'views/services.html',
            controller: 'ServicesController'
        })
        .when('/products', {
            templateUrl: 'views/products.html',
            controller: 'ProductsController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            //    controller: 'AboutController'
        })
        .when('/appointments', {
            templateUrl: 'views/appointments.html',
            //    controller: 'AppointmentsController'
        })
        .when('/blog', {
            templateUrl: 'views/blog.html',
            //    controller: 'BlogController'
        })
        .when('/checkout', {
            templateUrl: 'views/checkout.html',
            //    controller: 'CheckoutController'
        })
        .when('/developers', {
            templateUrl: 'views/developers.html',
            //    controller: 'DevelopersController'
        })
        .when('/services/:id', {
            templateUrl: 'views/service-detail.html',
            controller: 'ServiceDetailController'
        })
        .when('/products/:id', {
            templateUrl: 'views/product-detail.html',
            controller: 'ProductDetailController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);