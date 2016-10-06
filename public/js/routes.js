const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/agri', {
            templateUrl: 'views/agriculteur.html'
        })
        .otherwise({
            redirectTo: '/'
        })

}
