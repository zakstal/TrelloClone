TrelloClone.Views.OneBoard = Backbone.CompositeView.extend({
  template: JST['board_show'],

  tagName: 'ul',

  className: 'group rounded-boarder board-list',

  events: {
    "click .submit": "createList"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "sync remove", this.render);
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
      var renderedList = new TrelloClone.Views.List({
        model: list,
        board: that.model
      });
      var newLi = $("<li>")
      newLi.html(renderedList.render().$el)
     that.$el.append(newLi);
    });
  },

  createList: function(event) {
    event.preventDefault();
    var params = $(event.currentTarget).parent().serializeJSON();
    this.model.lists().create(params)
  }
});