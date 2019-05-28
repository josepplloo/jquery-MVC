function GalleryModel(imageService) {
  let data = [{
    id:1,
    avatar:'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  },
  {
    id:2,
    avatar:'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  },
  {
    id:3,
    avatar:'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  }];

  this.getAll = function () {
      return data;
  }

  this.get = function(id) {
    return data.find(avatar => avatar.id===id).avatar;
  }

}