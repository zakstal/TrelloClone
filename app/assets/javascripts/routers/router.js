TrelloClone.Routers.BoardsRouter = Backbone.Router.extend({
  routes: {
    "": "boardIndex"
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

  _subView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$el.html(view.render().$el);
  }
});