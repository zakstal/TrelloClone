TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: "api/lists",

  model: TrelloClone.Models.List,

  getOrFetch: function(id) {
    var lists = this;
    var list;
    if(list = lists.get(id)){
      list.fetch();
    } else {
      list = new TrelloClone.Models.List({
        id: id
      });

      list.fetch({
        success: function(){
          lists.add(list)
        }
      });
    }
    return list;
  }
});