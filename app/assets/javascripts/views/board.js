TrelloClone.Views.OneBoard = Backbone.CompositeView.extend({
  template: JST['board_show'],

  tagName: 'ul',

  className: 'board-list',

  events: {
    "click .submit": "createList"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "sync", this.render);
  },

  render: function() {
     // this.rendList =
    var boardTemp = this.template({
      board: this.model,
    });

    this.$el.html(boardTemp);
    this.renderLists()
    return this;
  },

  renderLists: function() {
    var that = this
    this.model.lists().each(function(list){
      var renderedList = new TrelloClone.Views.List({model: list})
     that.$el.append(renderedList.render().$el);
    });
  },

  createList: function(event) {
    event.preventDefault();
    var params = $(event.currentTarget).parent().serializeJSON();
    this.model.lists().create(params)
  }
});