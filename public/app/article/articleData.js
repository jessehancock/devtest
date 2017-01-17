// INITILIZE SERVICE
// ============================================================
angular.module("app").service("articleService", function() {

  this.item1 = {
    image: 'http://www.wall321.com/thumbnails/detail/20120404/water%20landscapes%20nature%20outdoors%20norway%20fjord%20geiranger%20fjord%201920x1200%20wallpaper_www.wallpaperto.com_76.jpg',
    title: 'image one',
    caption: 'caption one'
  }

  this.item2 = {
    image: 'http://www.outdoors.org/articles/wp-content/uploads/2014/05/OUTDOOR-TRIPS-WITH-KIDS-BEST-FAMILY-BACKPACKING-IN-NEW-ENGLAND-AND-THE-MID-ATLANTIC1.jpg',
    title: 'image two',
    caption: 'caption two'
  }

});
