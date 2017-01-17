// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("articleCtrl", function($scope, articleService) {
  // VARIABLES
  // ============================================================


  //this gives the data item1 as a default
  $scope.data = articleService.item1;

  // FUNCTIONS
  // ============================================================

  //These functions reassign the data
  $scope.imageOne =()=> $scope.data = articleService.item1;
  $scope.imageTwo = ()=> $scope.data = articleService.item2;


});
