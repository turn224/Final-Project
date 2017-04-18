var app = angular.module('HairSmoothieBar', ['HairSmoothieBar.controllers', 'HairSmoothieBar.factories',  'HairSmoothieBar.services', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

   $locationProvider.html5Mode(true);

   $routeProvider.when('/', {
       templateUrl: 'views/welcome.html'
    //    controller: 'WelcomeController'
   })
   .when('/services', {
       templateUrl: 'views/services.html',
       controller: 'ServicesController'
   })
   .when('/services/:id', {
       templateUrl: 'views/service-detail.html',
       controller: 'ServiceDetailController'
   })
   .when('/products', {
       templateUrl: 'views/products.html',
       controller: 'ProductsController'
   })
    .when('/products/:id', {
       templateUrl: 'views/product-detail.html',
       controller: 'ProductDetailController'
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
   
}]);