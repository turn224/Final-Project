var app = angular.module('HairSmoothieBar', ['ngRoute', 'ngResource', 'HairSmoothieBar.controllers', 'HairSmoothieBar.factories', 'HairSmoothieBar.services']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: 'views/welcome.html',
            controller: 'WelcomeController'
        })
        .when('/services', {
            templateUrl: 'views/services.html',
            controller: 'ServicesController'
        })
        .when('/products', {
            templateUrl: 'views/products.html',
            controller: 'ProductsController'
        })
        .when('/mailing', {
            templateUrl: 'views/mailing.html',
            controller: 'MailingController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        .when('/appointments', {
            templateUrl: 'views/appointments.html',
            //    controller: 'AppointmentsController'
        })
        .when('/blog', {
            templateUrl: 'views/blog.html',
            controller: 'BlogController'
        })
        .when('/compose', {
            templateUrl: 'views/compose.html',
            controller: 'ComposeController'
        })
        .when('/purchases', {
            templateUrl: 'views/checkout.html',
            controller: 'CheckoutController'
        })
        .when('/developers', {
            templateUrl: 'views/developers.html',
            //    controller: 'DevelopersController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'AdminController'
        })
        .when('/blog/:id', {
            templateUrl: 'views/singleblog.html',
            controller: 'SingleBlogController'
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