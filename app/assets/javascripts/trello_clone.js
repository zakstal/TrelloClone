window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(element) {

    TrelloClone.boards = new TrelloClone.Collections.Boards()
    TrelloClone.boards.fetch()

    new TrelloClone.Routers.BoardsRouter({
      "$el": element
    });
    Backbone.history.start()
  }

};
