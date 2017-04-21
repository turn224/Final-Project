angular.module('HairSmoothieBar.factories', [])


    .factory('Products', ['$resource', function ($resource) {
        return $resource('api/products/:id', { id: '@id' }, {
        });
    }])

    .factory('Services', ['$resource', function ($resource) {
        return $resource('api/services/:id', { id: '@id' }, {
        });
    }])
    .factory('Blog', ['$resource', function ($resource) {
        return $resource('/api/blog/:id', { id: '@id' }, {
            'update': { method: 'PUT' },
            'post': { method: 'POST' }
        })
    }])

    .factory('Customers', ['$resource', function ($resource) {
        return $resource('/api/customers/:id', { id: '@id' }, {
            'update': { method: 'PUT' },
            'post': { method: 'POST' }
        })
    }])

    .factory('Purchases', ['$resource', function ($resource) {
        return $resource('/api/purchases/:id', { id: '@id' }, {
            'update': { method: 'PUT' },
            'post': { method: 'POST' }
        })

    }]);

