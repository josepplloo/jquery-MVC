function GalleryView(el) {
    this.$el = $(el);

    this.render = function (imagesArray) {
        this.$el.append(
          imagesArray.map(image => `<img class="js-gallery-image" 
          data-id="${image.id}" 
          src="${image.avatar}"></img>`)
        );
    }
}