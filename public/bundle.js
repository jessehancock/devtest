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
    image: 'public/assets/images/articlePhoto1.jpg',
    title: 'image one',
    caption: 'caption one'
  };

  this.item2 = {
    image: 'public/assets/images/articlePhoto2.jpg',
    title: 'image two',
    caption: 'caption two'
  };
});
// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("tilesCtrl", ["$scope", "tilesData", function ($scope, tilesData) {
  // VARIABLES
  // ============================================================
  $scope.data = tilesData.data;
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE SERVICE
// ============================================================
angular.module("app").service("tilesData", ["$http", function ($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.data = {
    locals: [{
      title: 'local one',
      discription: 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      image: 'public/assets/images/photo01.jpg',
      blurb: 'this is the local one'
    }, {
      title: 'local two',
      discription: 'teu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est',
      image: 'public/assets/images/photo02.jpg',
      blurb: 'this is the local two'
    }, {
      title: 'local three',
      discription: 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est sint occaecat',
      image: 'public/assets/images/photo03.jpg',
      blurb: 'this is the local three'
    }],
    news: [{
      title: 'news one',
      discription: 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est sint occaecat',
      blurb: 'this is the news one',
      image: 'public/assets/images/photo04.jpg' }, {
      title: 'news two',
      discription: 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est sint occaecat',
      blurb: 'this is the news two',
      image: 'public/assets/images/photo05.jpg' }, {
      title: 'news three',
      discription: 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est sint occaecat',
      blurb: 'this is the local three',
      image: 'public/assets/images/photo06.jpg' }],
    inspirations: [{
      title: 'inspiration one',
      discription: 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est sint occaecat',
      blurb: 'this is the inspiration one',
      image: 'public/assets/images/photo07.jpg' }, {
      title: 'inspiration two',
      discription: 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est sint occaecat',
      blurb: 'this is the inspiration two',
      image: 'public/assets/images/photo08.jpg' }, {
      title: 'inspiration three',
      discription: 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est sint occaecat',
      blurb: 'this is the inspiration three',
      image: 'public/assets/images/photo09.jpg' }]
  };
  // OTHER FUNCTIONS
  // ============================================================
}]);