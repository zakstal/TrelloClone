TrelloClone.Views.List = Backbone.CompositeView.extend({
  template: JST['list'],
  tagName: 'li',

  initialize: function () {
    // this.listenTo(this)
  },

  render: function (){
    var listTemp = this.template({
     list: this.model
    });

    this.$el.html(listTemp);

    return this;
  }
});