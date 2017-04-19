angular.module('HairSmoothieBar.controllers', [])

    .controller('BlogController', ['$scope', 'Blog', '$location', function($scope, Blog, $location) {
        $scope.blogposts = Blog.query();
    }])

    .controller('ComposeController', ['$scope', 'Blog', '$location', function($scope, Blog, $location) {

            $scope.savePost = function () {
                var newPost = new Blog({
                    title: $scope.title,
                    content: $scope.content,
                    
                });
                newPost.$save(function (success) {
                    console.log(success);
                    console.log('it worked');
                    // $location.path('/');
                });
            }
    }])


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

    .controller('ServicesController', ['$scope', '$location', 'Services', function ($scope, $location, Services) {

        $scope.services = Services.query();
    }])
    
    .controller('ServiceDetailController', ['$scope', '$location', '$routeParams', 'Services', function ($scope, $location, $routeParams, Services) {
        Services.get({ id: $routeParams.id }, function (success) {
            $scope.service = success;
        }, function (err) {
            console.log(err);
        })
}])


