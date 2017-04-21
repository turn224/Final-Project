angular.module('HairSmoothieBar.services', [])

    .service('SEOService', ['$rootScope', function ($rootScope) {
        this.setSEO = function (data) {
            $rootScope.seo = {};
            for (var prop in data) {
                $rootScope.seo[prop] = data[prop];
            }
        }
    }])


    .service('UserService', ['$http', '$location', function ($http, $location) {
        var user;

        this.isLoggedIn = function () {
            if (!user) {
                return false;
            } else {
                return true;
            }
        }
        this.requireLogin = function (checkAdmin) {
            if (!this.isLoggedIn()) {
                var current = $location.path();
                $location.path('/login').search('p', current);
            } else if (checkAdmin && !this.isAdmin()) {
                $location.path('/');
            }
        }
        this.isAdmin = function (role) {
            if (!user) {
                return false;
            } else {
                return user.role === "admin;"
            }
        }
        this.login = function (email, password) {
            return $http({
                method: 'POST',
                url: 'http://localhost:3000/api/customers/login',
                data: { email, password }
            }).then(function (success) {
                user = success.data;
                return success.data;
            })
        };
        this.logout = function () {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/api/customers/logout'
            }).then(function (success) {
                user = undefined;
            });
        }
        this.me = function () {
            if (user) { return Promise.resolve(user); }
            else {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:3000/api/customers/me'
                }).then(function(success) {
                    user = success.data;
                    return success.data;
                });
            }
        }
    }])

    .service('ShopCart', ['$rootScope', function ($rootScope) {
        var cartItems = [];
        this.addToCart = function (item) {
            if (cartItems == null) {
                cartItems = [];
            }
            for (var i in cartItems) {
                if (cartItems[i].id === item.id) {
                    cartItems[i].qty += item.qty;
                    this.saveCart();
                    this.loadCart();
                    return;
                }
            };
            var newItem = {
                productName: item.productName,
                productPrice: item.productPrice,
                productImg: item.productImg,
                qty: 1,
                id: item.id
            };
            cartItems.push(newItem);
            $rootScope.cartSize = cartItems.length;
            this.saveCart();
            this.loadCart();
        };
        this.removeItem = function (id) {
            for (var i in cartItems) {
                if (cartItems[i].id === id) {
                    cartItems[i].qty--;
                    if (cartItems[i].qty <= 0) {
                        cartItems.splice(i, 1);
                    }
                    this.saveCart();
                    this.loadCart();
                    break;
                };
            };
        };
        this.removeAll = function (item) {
            for (var i in cartItems) {
                if (cartItems[i].id === id) {
                    cartItems.splice(i, 1);
                    return;
                };
            };
            this.saveCart();
        };
        this.clearCart = function () {
            cartItems = [];
            this.saveCart();
        };
        this.countCart = function () {
            var totalCount = 0;
            for (var i in cartItems) {
                totalCount += cartItems[i].qty;
            }
            return totalCount;
        };
        this.totalCart = function () {
            var totalCost = 0;
            for (var i in cartItems) {
                totalCost += cartItems[i].productPrice * cartItems[i].qty;
            }
            this.saveCart();
            return totalCost;
        };
        this.getCart = function () {
            var cartCopy = [];
            for (var i in cartItems) {
                var item = cartItems[i];
                var itemCopy = {};
                for (var p in item) {
                    itemCopy[p] = item[p];
                }
                cartCopy.push(itemCopy);
            }
            return cartCopy;
        };
        this.saveCart = function () {
            localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
        };
        this.loadCart = function () {
            cartItems = JSON.parse(localStorage.getItem('shoppingCart'));
        };
    }]);
