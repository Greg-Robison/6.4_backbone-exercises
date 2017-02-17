var $ = require('jquery');
var Backbone = require('backbone');

var blogListItemTemplate = require('../../templates/blog_list_item.hbs');

var BlogForm = Backbone.View.extend({
    tagName: 'form',
    className: 'blog-form',
    template: blogListItemTemplate,

    events: {
        'click .submit': 'addBlog'
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    },
    addBlog: function(event) {
        event.preventDefault();
        this.collection.create({
          title: $('.title').val(),
          body: $('.body').val(),
        });
        this.$el[0].reset();
    }
});

module.exports = {
    BlogForm: BlogForm
}
