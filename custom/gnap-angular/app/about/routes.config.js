(function () {
    angular
        .module('gnap-example-app')
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('main.about', {
                    url: '/about',
                    templateUrl: 'app/about/about.html',
                    controller: 'AboutController'
                });
        }]);
})();