// INITILIZE APP
// ============================================================
angular.module("app", ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('menu', {
    url: '/',
    templateUrl: './public/app/menu/menu.html'
  }).state('article', {
    url: '/article',
    templateUrl: './public/app/article/article.html',
    controller: 'articleCtrl'
  }).state('tiles', {
    url: '/tiles',
    templateUrl: './public/app/tiles/tiles.html',
    controller: 'tilesCtrl'
  });
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("articleCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'article test';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("tilesCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'tiles test';
  // FUNCTIONS
  // ============================================================
}]);