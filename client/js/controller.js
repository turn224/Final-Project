angular.module('HairSmoothieBar.controllers', [])
    .controller('WelcomeController', ['$scope', '$http', '$location', 'SEOService', function ($scope, $http, $location, SEOService) {
        $scope.goToShop = function () {
            $location.path('/products');
        }
        SEOService.setSEO({
			title: 'Hair Smoothie Bar',
			image: 'http://' + $location.host() + '/images/logo.png',
			url: $location.url(),
			description: 'Hair Smoothie Bar'
		});
    }])

    .controller('AboutController', ['$scope', '$http', '$location', 'SEOService', function($scope, $http, $location, SEOService){
        SEOService.setSEO({
			title: 'About',
			image: 'http://' + $location.host() + '/images/logo.png',
			url: $location.url(),
			description: 'Hair Smoothie Bar About'
		});
    }])

    .controller('BlogController', ['$scope', 'Blog', '$location', 'SEOService', function ($scope, Blog, $location, SEOService) {
        $scope.blogposts = Blog.query();
        console.log($scope.blogposts);
        SEOService.setSEO({
			title: 'Blog',
			image: 'http://' + $location.host() + '/images/logo.png',
			url: $location.url(),
			description: 'Hair Smoothie Bar Blog'
		});

        $scope.goToNewPost = function () {
            $location.path('/compose');
        }

        $scope.goToSinglePost = function (id) {
            $location.path('/blog/' + id);
        }
    }])

    .controller('ComposeController', ['$scope', 'Blog', '$location', 'SEOService', function ($scope, Blog, $location, SEOService) {
        SEOService.setSEO({
			title: 'Compose',
			image: 'http://' + $location.host() + '/images/logo.png',
			url: $location.url(),
			description: 'Hair Smoothie Bar Blog'
		});

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

    .controller('SingleBlogController', ['$scope', 'Blog', '$location', '$routeParams', 'SEOService', function ($scope, Blog, $location, $routeParams, SEOService) {
        var id = $routeParams.id;
        Blog.get({ id: $routeParams.id }, function (success) {
            $scope.singleblog = success;
            console.log($scope.singleblog);
        })
        SEOService.setSEO({
			title: 'Blog',
			image: 'http://' + $location.host() + '/images/logo.png',
			url: $location.url(),
			description: 'Hair Smoothie Bar Blog'
		});

    }])

    .controller('CheckoutController', ['$scope', '$location', 'SEOService', function($scope, $location, SESEOServiceO){
        SEOService.setSEO({
			title: 'Checkout',
			image: 'http://' + $location.host() + '/images/logo.png',
			url: $location.url(),
			description: 'Hair Smoothie Bar Checkout'
		});
    }])

    .controller('ProductsController', ['$scope', '$location', 'Products', 'SEOService', function ($scope, $location, Products, SEOService) {
        $scope.products = Products.query();
        SEOService.setSEO({
			title: 'Products',
			image: 'http://' + $location.host() + '/images/logo.png',
			url: $location.url(),
			description: 'Hair Smoothie Bar Products'
		});
    }])

    .controller('ProductDetailController', ['$scope', '$location', '$routeParams', 'Products', 'SEOService', function ($scope, $location, $routeParams, Products, SEOService) {
        Products.get({ id: $routeParams.id }, function (success) {
            $scope.product = success;
        }, function (err) {
            console.log(err);
        });
        SEOService.setSEO({
			title: 'Products',
			image: 'http://' + $location.host() + '/images/logo.png',
			url: $location.url(),
			description: 'Hair Smoothie Bar Products'
		});
    }])

    .controller('ServicesController', ['$scope', '$location', 'Services', 'SEOService', function ($scope, $location, Services, SEOService) {
        $scope.services = Services.query();
        SEOService.setSEO({
			title: 'Services',
			image: 'http://' + $location.host() + '/images/logo.png',
			url: $location.url(),
			description: 'Hair Smoothie Bar Services'
		});
    }])

    .controller('ServiceDetailController', ['$scope', '$location', '$routeParams', 'Services', 'SEOService', function ($scope, $location, $routeParams, Services, SEOService) {
        Services.get({ id: $routeParams.id }, function (success) {
            $scope.service = success;
        }, function (err) {
            console.log(err);
        });
        SEOService.setSEO({
			title: 'Services',
			image: 'http://' + $location.host() + '/images/logo.png',
			url: $location.url(),
			description: 'Hair Smoothie Bar Services'
		});
    }])

    .controller('MailingController', ['$scope', '$http', '$location', 'Customers', 'SEOService', function ($scope, $http, $location, Customers, SEOService) {
         SEOService.setSEO({
			title: 'Mailing List',
			image: 'http://' + $location.host() + '/images/logo.png',
			url: $location.url(),
			description: 'Hair Smoothie Bar Mailing List'
		});
        $scope.newContact = {
            firstname: '',
            lastname: '',
            fromEmail: '',
            phone: ''
        }
        $scope.mailingList = function () {
            var contact = new Customers({
                firstname: $scope.newContact.firstname,
                lastname: $scope.newContact.lastname,
                fromEmail: $scope.newContact.fromEmail,
                phone: $scope.newContact.phone,
                subject: 'Hair Smoothie Bar',
				content: 'Thank you for joining our mailing list.  Stay tuned for exciting information about Hair Smoothie Bar'
            })
            contact.$save(function (success) {
                $location.path('/about');
            });
        }
    }])


