TrelloClone.Views.Board  = Backbone.CompositeView.extend({
  template: JST['board_index'],

  events: {
    "click .submit": "createBoard",
    "click .delete": "deleteBoard"
  },

  initialize: function() {
      this.listenTo(this.collection, "sync remove", this.render)
  },

  render: function () {
    var boardTemp = this.template({
      boards: this.collection
    });

    this.$el.html(boardTemp);
    return this;
  },

  createBoard: function(event) {
    event.preventDefault()
    var params = $(event.target).parent().serializeJSON()
    this.collection.create(params)
  },

  deleteBoard: function(event) {
    var id = $(event.target).data("id")
    this.collection.get(id).destroy();
  }

});