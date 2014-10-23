TrelloClone.Routers.BoardsRouter = Backbone.Router.extend({
  routes: {
    "": "boardIndex"
  }

  initialize: function (options) {
    this.$el = options.$el
  },

  boardIndex: function () {
    alert("also hello")
    var board = new TrelloClone.Models.Board();
    //create board model. use get or fetch?
    var boardView = new TrelloClone.Views.Board({
      model: Board
    });

    _subView(boardView);
  },

  _subView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    //pass in $rootel on initialize
    this.$rootEl.html(view.render().$el);
  }
})