TrelloClone.Routers.BoardsRouter = Backbone.Router.extend({
  routes: {
    "": "boardIndex",
    "board/:id": "showBoard"
  },

  initialize: function (options) {
    this.$el = options.$el

  },

  boardIndex: function () {

    var boardView = new TrelloClone.Views.Board({
      collection: TrelloClone.boards
    });

    this._subView(boardView);
  },

  showBoard: function(id) {
    console.log("in showBoard route")
    var board = TrelloClone.boards.getOrFetch(id);
    var newBoard = new TrelloClone.Views.OneBoard({
      model: board
    });
    this._subView(newBoard);
  },

  _subView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$el.html(view.render().$el);
  }
});