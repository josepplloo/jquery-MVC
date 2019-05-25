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
        console.log('image clicked', e.target.src);
    }
}