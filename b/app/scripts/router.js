var $ = require('jquery');
var Backbone = require('backbone');

var views = require('./views/person_list.js');
var models = require('./models/person.js');

var PersonRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize: function(){
    this.personList = new models.PersonCollection();
  },
  index: function(){
    var personForm = new views.PersonForm({collection: this.personList});
    $('.input-form').html(personForm.render().$el);
  },
});


var personRouter = new PersonRouter();
module.exports = personRouter;
