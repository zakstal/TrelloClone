TrelloClone.Collections.Cards = Backbone.Collection.extend({
  url: "api/lists",

  model: TrelloClone.Models.Card,

  getOrFetch: function(id) {
    var cards = this;
    var card;
    if(card = cards.get(id)){
      card.fetch();
    } else {
      card = new TrelloClone.Models.Card({
        id: id
      });

      card.fetch({
        success: function(){
          cards.add(card)
        }
      });
    }
    return card;
  }
});