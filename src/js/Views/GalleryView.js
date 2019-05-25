function GalleryView(el) {
    this.$el = $(el);

    this.render = function () {
        this.$el.append(`<img class="js-gallery-image" src="https://placebear.com/200/200"></img>
        <img class="js-gallery-image" src="https://placekitten.com/200/200"></img>
        <img class="js-gallery-image" src="https://placedog.net/200/200"></img>`);
    }
}