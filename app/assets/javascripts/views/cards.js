TrelloClone.Views.Card = Backbone.CompositeView.extend({
  template: JST['card'],

  tagName: 'li',

  className: 'rounded-boarder card-list group',

  events: {
    "click .delete-card": "deleteCard"
  },

  initialize: function () {
    // this.listenTo(this)
  },

  render: function (){
    var cardTemp = this.template({
     card: this.model
    });

    this.$el.html(cardTemp);

    return this;
  },

  deleteCard: function(event) {
    this.model.destroy();
  }
});