// INITILIZE SERVICE
// ============================================================
angular.module("app").service("articleService", function() {

  this.item1 = {
    image: 'public/assets/images/articlePhoto1.jpg',
    title: 'image one',
    caption: 'caption one'
  }

  this.item2 = {
    image: 'public/assets/images/articlePhoto2.jpg',
    title: 'image two',
    caption: 'caption two'
  }

});
