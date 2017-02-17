var $ = require('jquery');
var Backbone = require('backbone');

var views = require('./views/blog_list');
var models = require('./models/blog');

var BlogRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize: function(){
    this.blogList = new models.BlogCollection();
  },
  index: function(){
    var blogForm = new views.BlogForm({collection: this.blogList});
    $('.input-form').html(blogForm.render().$el);
  },
});

var blogRouter = new BlogRouter();
module.exports = blogRouter;
