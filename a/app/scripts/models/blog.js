var Backbone = require('backbone');

var BlogPost = Backbone.Model.extend({
  id: '_id',
  defaults: {
    title: '',
    body: ''
  }

});

var BlogCollection = Backbone.Collection.extend({
  model: BlogPost,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/greg'
});

module.exports = {
  BlogPost: BlogPost,
  BlogCollection: BlogCollection
}
