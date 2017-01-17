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
angular.module("app").controller("articleCtrl", ["$scope", "articleService", function ($scope, articleService) {
  // VARIABLES
  // ============================================================


  //this gives the data item1 as a default
  $scope.data = articleService.item1;

  // FUNCTIONS
  // ============================================================

  //These functions reassign the data
  $scope.imageOne = () => $scope.data = articleService.item1;
  $scope.imageTwo = () => $scope.data = articleService.item2;
}]);
// INITILIZE SERVICE
// ============================================================
angular.module("app").service("articleService", function () {

  this.item1 = {
    image: 'http://www.wall321.com/thumbnails/detail/20120404/water%20landscapes%20nature%20outdoors%20norway%20fjord%20geiranger%20fjord%201920x1200%20wallpaper_www.wallpaperto.com_76.jpg',
    title: 'image one',
    caption: 'caption one'
  };

  this.item2 = {
    image: 'http://www.outdoors.org/articles/wp-content/uploads/2014/05/OUTDOOR-TRIPS-WITH-KIDS-BEST-FAMILY-BACKPACKING-IN-NEW-ENGLAND-AND-THE-MID-ATLANTIC1.jpg',
    title: 'image two',
    caption: 'caption two'
  };
});
// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("tilesCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'tiles test';
  // FUNCTIONS
  // ============================================================
}]);