// INITILIZE APP
// ============================================================
angular.module("app",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
  .state('menu', {
   url: '/',
   templateUrl: './public/app/menu/menu.html',
 })
	.state('article', {
	 url: '/article',
	 templateUrl: './public/app/article/article.html',
	 controller: 'articleCtrl'
 })
	.state('tiles', {
    url: '/tiles',
    templateUrl: './public/app/tiles/tiles.html',
    controller: 'tilesCtrl'
   })
});
