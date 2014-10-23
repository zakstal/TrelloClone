window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert("hello")
    TrelloClone.lists = new TrelloClone.Collections.Lists
    //create collection of boards
    TrelloClone.boars = new TrelloClone.Collections.Boards

    new TrelloClone.Routers.BoardsRouter();
    Backbone.histroy.start()
  }

  //does this need to be here?
  // $(document).ready(fucntion(){
 //
 //  })
};
