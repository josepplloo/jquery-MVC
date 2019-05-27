function GalleryController(el, view, model){
    this.$el = $(el);
    this.view = view;
    this.model = model;

    this.init = function(){
        this.view.render();
        this.bindEvents();
    }

    this.bindEvents = function() {
      this.$el.on('click', '.js-gallery-image', this.imageClicked.bind(this));
    }

  this.imageClicked = function (e) {
    $('.js-gallery-image').removeClass('js-gallery-image--selected');

    e.target.classList.add('js-gallery-image--selected');
    //console.log('This image clicked', e.target.src);
  }
}