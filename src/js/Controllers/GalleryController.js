function GalleryController(el, view, model){
  this.$el = $(el);
  this.view = view;
  this.model = model;
  
  this.init = function(){
    this.view.render(model.getAll());
    this.bindEvents();
  }

  this.bindEvents = function() {
    this.$el.on('click', '.js-gallery-image', this.imageClicked.bind(this));
  }

  this.imageClicked = function (e) {
    removeSelected();

    e.target.classList.add('js-gallery-image--selected');
    Observer.setData('avatar',$(e.target).attr('src'));
    Observer.publish()
  }

  const removeSelected = function(data) {
    $('.js-gallery-image').removeClass('js-gallery-image--selected');
  }

  //Observer.subscribe(removeSelected)
}