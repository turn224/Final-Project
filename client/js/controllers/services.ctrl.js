var app = angular.module('HairSmoothieBar.controllers', []);


app.controller('ServicesController', ['$scope', '$location', 'Service', function ($scope, $location, Service) {

    $scope.service = Services.query();

    // $scope

}]);

app.controller('ServiceDetailController', ['$scope', '$location', '$routeParams', 'Service', function ($scope, $location, $routeParams, Service) {

    $scope.service = Service.get({ id: $routeParams.id }, function (success) {
        $scope.service = success;
    });

}]);