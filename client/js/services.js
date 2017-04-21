angular.module('HairSmoothieBar.services', [])

    .service('SEOService', ['$rootScope', function ($rootScope) {
        this.setSEO = function (data) {
            $rootScope.seo = {};
            for (var prop in data) {
                $rootScope.seo[prop] = data[prop];
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
                title: item.title,
                price: item.price,
                imageurl: item.imageurl,
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
                totalCost += cartItems[i].price * cartItems[i].qty;
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