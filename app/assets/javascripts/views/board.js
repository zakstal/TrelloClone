TrelloClone.Views.Board  = Backbone.CompositeView.extend({
  template: JST['board_index'],

  render: function () {
    var boardTemp = this.template({
      board: this.model
      //pass in this model of board
    });

    this.$el.html(boardTemp);

    return this;
  }

});