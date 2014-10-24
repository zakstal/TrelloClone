TrelloClone.Views.List = Backbone.CompositeView.extend({
  template: JST['list'],
  className: 'rounded-boarder list-list',
  events: {
    "click .delete-list": "deleteList",
    "click .submit-card": "createCard"
  },

  initialize: function (options) {
    this.board = options.board;
    this.listenTo(this.model.cards(), "sync remove", this.render)
  },

  render: function (){
    var listTemp = this.template({
     list: this.model
    });

    this.$el.html(listTemp);
    this.renderLists()
    return this;
  },

  renderLists: function() {
    var that = this
    var newDiv = $("<div>")
    this.model.cards().each(function(card){     //
      var renderedList = new TrelloClone.Views.Card({model: card})

     that.$el.append(renderedList.render().$el);
    });



  },

  createCard: function(event) {
    event.preventDefault();
    var params = $(event.currentTarget).parent().serializeJSON();
    this.model.cards().create(params);
  },


  deleteList: function(event) {
    this.model.destroy();
  }

});