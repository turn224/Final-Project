angular.module('HairSmoothieBar.controllers', [])
    .controller('WelcomeController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        $scope.goToShop = function () {
            $location.path('/products');
        }
    }])

    .controller('BlogController', ['$scope', 'Blog', '$location', function ($scope, Blog, $location) {
        $scope.blogposts = Blog.query();
        console.log($scope.blogposts);

        $scope.goToNewPost = function () {
            $location.path('/compose');
        }

        $scope.goToSinglePost = function (id) {
            $location.path('/blog/' + id);
        }
    }])

    .controller('ComposeController', ['$scope', 'Blog', '$location', function ($scope, Blog, $location) {

        $scope.savePost = function () {
            var newPost = new Blog({
                title: $scope.title,
                content: $scope.content,
            });
            newPost.$save(function (success) {
                $location.path('/blog');
            });
        }
    }])

    .controller('SingleBlogController', ['$scope', 'Blog', '$location', '$routeParams', function ($scope, Blog, $location, $routeParams) {
        var id = $routeParams.id;

        Blog.get({ id: $routeParams.id }, function (success) {
            $scope.singleblog = success;
            console.log($scope.singleblog);
        })

    }])
    
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

    .controller('MailingController', ['$scope', '$http', '$location', 'Customers', function ($scope, $http, $location, Customers) {
        $scope.newContact = {
            firstname: '',
            lastname: '',
            fromEmail: '',
            phone: ''
            // subject: '',
            // content: ''
            // subject: 'Hair Smoothie Bar',
			// 	content: 'Thank you for joining our mailing list.  Stay tuned for exciting information about Hair Smoothie Bar'
        }
        $scope.mailingList = function () {
            var contact = new Customers({
                firstname: $scope.newContact.firstname,
                lastname: $scope.newContact.lastname,
                fromEmail: $scope.newContact.fromEmail,
                phone: $scope.newContact.phone
            })
            contact.$save(function (success) {
                $location.path('/about');
            });
        }
    }])


