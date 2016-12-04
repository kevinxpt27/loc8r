(function () {

angular.module('loc8rApp', ['ngRoute', 'ngSanitize','ui.bootstrap']); //ngRouter: se agrega la dependencia del modulo router

function config ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'home/home.view.html',
          controller: 'homeCtrl',
          controllerAs: 'vm'
      })
      .when('/about', {
          templateUrl: '/common/views/genericText.view.html',
          controller: 'aboutCtrl',
          controllerAs: 'vm'
      })
      .when('/location/:locationid', {
          templateUrl: '/locationDetail/locationDetail.view.html',
          controller: 'locationDetailCtrl',
          controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);//ENCENDEMOS CARACTERISTICAS DE HTML5
};

angular
    .module('loc8rApp')
    .config(['$routeProvider','$locationProvider', config]);

})();