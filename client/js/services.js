angular.module('HairSmoothieBar.services', [])

    .service('SEOService', ['$rootScope', function ($rootScope) {
        this.setSEO = function (data) {
            $rootScope.seo = {};
            for (var prop in data) {
                $rootScope.seo[prop] = data[prop];
            }
        }
    }])