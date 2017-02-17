var $ = require('jquery');
var Backbone = require('backbone');

var personListItemTemplate = require('../../template/person_list_item.hbs');


var PersonForm = Backbone.View.extend({
  tagName: 'form',
  className: 'person-form',
  template: personListItemTemplate,

  events: {
    'click .submit': 'addPerson'
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },
  addPerson: function(event){
    event.preventDefault();
    this.collection.create({
      firstName: $('.first-name').val(),
      lastName: $('.last-name').val(),
      address: $('.address').val(),
      phoneNumber: $('.phone-number').val(),
    });
    this.$el[0].reset();
  }
});

module.exports = {
  PersonForm: PersonForm
}
