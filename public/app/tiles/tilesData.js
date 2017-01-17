// INITILIZE SERVICE
// ============================================================
angular.module("app").service("tilesData", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.data = {
    locals: [{
      title: 'local one',
      discription: 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      image: 'public/assets/images/photo01.jpg',
      blurb: 'this is the local one',
    },
      {
      title: 'local two',
      discription: 'teu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est',
      image: 'public/assets/images/photo02.jpg',
      blurb: 'this is the local two',
    },
      {
      title: 'local three',
      discription: 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est sint occaecat',
      image: 'public/assets/images/photo03.jpg',
      blurb: 'this is the local three'
      ,}
    ],
    news: [{
      title: 'news one',
      discription: 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est sint occaecat',
      blurb: 'this is the news one',
      image: 'public/assets/images/photo04.jpg'},
      {
      title: 'news two',
      discription: 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est sint occaecat',
      blurb: 'this is the news two',
      image: 'public/assets/images/photo05.jpg'},
      {
      title: 'news three',
      discription: 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est sint occaecat',
      blurb: 'this is the local three',
      image: 'public/assets/images/photo06.jpg'}
    ],
    inspirations: [{
      title: 'inspiration one',
      discription: 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est sint occaecat',
      blurb: 'this is the inspiration one',
      image: 'public/assets/images/photo07.jpg'},
      {
      title: 'inspiration two',
      discription: 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est sint occaecat',
      blurb: 'this is the inspiration two',
      image: 'public/assets/images/photo08.jpg'},
      {
      title: 'inspiration three',
      discription: 'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est sint occaecat',
      blurb: 'this is the inspiration three',
      image: 'public/assets/images/photo09.jpg'}
    ],
  }
  // OTHER FUNCTIONS
  // ============================================================

});
