angular.module('HairSmoothieBar.controllers', [])
    .controller('WelcomeController', ['$scope', '$http', '$location', 'SEOService', function ($scope, $http, $location, SEOService) {
        $scope.goToShop = function () {
            $location.path('/products');
        }
        $scope.goToLogin = function () {
            $location.path('/login');
        }
        SEOService.setSEO({
            title: 'Hair Smoothie Bar',
            image: 'http://' + $location.host() + '/images/logo.png',
            url: $location.url(),
            description: 'Hair Smoothie Bar'
        });

    }])

    .controller('AboutController', ['$scope', '$http', '$location', 'SEOService', function ($scope, $http, $location, SEOService) {
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

        // $scope.goToNewPost = function () {
        //     $location.path('/compose');
        // }

        $scope.goToSinglePost = function (id) {
            $location.path('/blog/' + id);
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

    .controller('CheckoutController', ['$scope', '$location', '$http', 'SEOService', 'ShopCart', '$rootScope', '$localStorage', function ($scope, $location, $http, SEOService, ShopCart, $rootScope, $localStorage) {
        $scope.items = ShopCart.loadCart();
        $scope.cart = ShopCart.getCart();
        $scope.total = ShopCart.totalCart();
        $scope.count = ShopCart.countCart();
        $scope.shipping = 15;
        // $scope.total = $scope.shipping + $scope.subtotal;

         $scope.products = [];
        angular.forEach($scope.cart, function(value, key){
            $scope.products.push(value.productName);
        });

        SEOService.setSEO({
            title: 'Checkout',
            image: 'http://' + $location.host() + '/images/logo.png',
            url: $location.url(),
            description: 'Hair Smoothie Bar Checkout'
        });

        $scope.remove = function (id) {
			$scope.cart = ShopCart.getCart();
			$scope.id = $scope.cart[0].id;
			$scope.remove = ShopCart.removeItem($scope.id);
			location.reload();
		};
        
        $scope.processPayment = function () {
            Stripe.card.createToken({
                number: $scope.cardNumber,
                cvc: $scope.cvc,
                exp_month: $scope.expMonth,
                exp_year: $scope.expYear
            }, function (status, response) {
                if (response.error) {
                    alert("Trans failed!");
                } else {
                    var stripetransactionid = response.id;
                    $http({
                        method: "POST",
                        url: "http://localhost:3000/api/purchases",
                        data: {
                            stripetransactionid: stripetransactionid,
                            total: $scope.total,
                            productName: $scope.products,
                            custName: $scope.first_name + ' ' + $scope.last_name,
                            subject: 'Hair Smoothie Bar Purchase',
							content: 'Name: ' + $scope.first_name + ' ' + $scope.last_name + '<br>' + 
                                     'Email: ' + $scope.email_address + '<br>' +
                                     'Phone: ' + $scope.phone_number + '<br>' +
                                     'Total: $' + $scope.total + '<br>' + 
                                     'Product: ' + $scope.products
                        }
                    }).then(function () {
                        alert("Thank you for your Hair Smoothie Bar Purchase!")
                        $location.path('/');
                        $scope.clear = ShopCart.clearCart();
                    }, function () {
                        alert("PAYMENT NOT SUCCESSFUL");
                    });
                }
            });
        }
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

    .controller('ProductDetailController', ['$scope', '$location', '$routeParams', 'Products', 'SEOService', 'ShopCart', function ($scope, $location, $routeParams, Products, SEOService, ShopCart) {
        Products.get({ id: $routeParams.id }, function (success) {
            $scope.product = success;
        }, function (err) {
            console.log(err);
        });

        $scope.addToCart = function (product) {
            ShopCart.addToCart({
                productName: $scope.product.productName,
                productPrice: $scope.product.productPrice,
                productImg: $scope.product.productImg,
                id: $scope.product.id,
                qty: 1
            });
            location.reload();
        }

        SEOService.setSEO({
            title: 'Products',
            image: 'http://' + $location.host() + '/images/logo.png',
            url: $location.url(),
            description: 'Hair Smoothie Bar Products'
        });

        $scope.checkout = function () {
            $location.path('/purchases');
        }
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

    .controller('MailingController', ['$scope', '$http', '$location', 'Mailing', 'SEOService', function ($scope, $http, $location, Mailing, SEOService) {
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
            var contact = new Mailing({
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

    .controller('LoginController', ['$scope', '$location', 'UserService', 'SEOService', function ($scope, $location, UserService, SEOService) {
        UserService.me().then(function (success) {
            redirect();
        })
        function redirect() {
            var dest = $location.search().p;
            if (!dest) { dest = '/admin'; }
            $location.path(dest).search('p', null);
        }
        $scope.login = function () {
            UserService.login($scope.email, $scope.password)
                .then(function () {
                    redirect();
                }, function (err) {
                    console.log(err);
                });
        }
        SEOService.setSEO({
            title: 'Login',
            image: 'http://' + $location.host() + '/images/logo.png',
            url: $location.url(),
            description: 'Admin Login Page'
        });
    }])

    .controller('AdminController', ['$scope', '$location', 'UserService', 'SEOService', 'Blog', function ($scope, $location, UserService, SEOService, Blog) {
        UserService.requireLogin(true);
       

        SEOService.setSEO({
            title: 'Compose',
            image: 'http://' + $location.host() + '/images/logo.png',
            url: $location.url(),
            description: 'Hair Smoothie Bar Blog'
        });

        $scope.savePost = function () {
             UserService.isAdmin($scope.role);
            var newPost = new Blog({
                title: $scope.title,
                content: $scope.content,
            });
            newPost.$save(function (success) {
                $location.path('/blog');
            });
        }
        $scope.logout = function () {
            UserService.logout().then(function () {
                $location.path('/');
            }), function (err) {
                console.log(err);
            }
        }
    }])


