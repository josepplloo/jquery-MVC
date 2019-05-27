function GalleryView(el) {
    this.$el = $(el);

    this.render = function () {
        this.$el.append(`<img class="js-gallery-image" src="https://placebear.com/100/100"></img>
        <img class="js-gallery-image" src="https://placekitten.com/100/100"></img>
        <img class="js-gallery-image" src="https://placedog.net/100/100"></img>`);
    }
}