function ContactModel(){
    this.data = [
        {id: 1, name: 'Damir', avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'},
        {id: 2, name: 'Mauricio', avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
        {id: 3, name: 'Juan', avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'},
    ];

    this.autoIncrement = this.data.length +1;

    this.getAll = function (){
        return this.data;
    }

    this.create = function(name, avatar) {
        this.data.push({
            id: this.autoIncrement++,
            name: name,
            avatar: avatar
        });
    }

    this.remove = function(id){
        this.data = this.data.filter((obj) => obj.id !== id);
    }
}