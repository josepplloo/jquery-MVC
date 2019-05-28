function ContactController(el, view, model){
  this.$el = $(el);
  this.view = view;
  this.model = model;

  this.init = function(){
    this.view.renderTable(this.$el);
    this.view.renderForm(this.$el);
    this.bindEvents();
    this.showContacts();
  }

  this.bindEvents = function() {
    this.$el.on('submit', '.js-add-contact', this.createContact.bind(this))
    this.$el.on('click', '.js-remove-contact', this.deleteContact.bind(this))
  }

  this.createContact = function(e){
    e.preventDefault(); 
    let name = this.$el.find('.js-contact-name').val();
    this.model.create(name, Observer.getData().avatar);
    this.showContacts();
    Observer.publish()
  }

  this.deleteContact = function(e){
    e.preventDefault(); 
    let id = $(e.target).data('id');
    this.model.remove(id);
    this.showContacts();
  }

  this.showContacts = function(){
    let data = this.model.getAll();
    this.view.renderTableContent(this.$el, data);
  }
}