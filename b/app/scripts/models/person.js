var Backbone = require('backbone');

var Person = Backbone.Model.extend({
  id: "_id",
  defaults: {
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: ''
  }
});

var PersonCollection = Backbone.Collection.extend({
  model: Person,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/greg'
});

module.exports = {
  Person: Person,
  PersonCollection: PersonCollection
}
