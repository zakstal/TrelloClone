TrelloClone.Views.OneBoard = Backbone.CompositeView.extend({
  template: JST['board_show'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {

    var boardTemp = this.template({
      board: this.model

    });


    var $board = $(boardTemp);
    var $boardList = $($board.find('board-list'))
    // console.log($boardList)
    var that = this
    this.model.lists().each(function(list){
      var newList = new TrelloClone.Views.List({ model: list })
      console.log(newList)
      that.addSubview('.board-list', newList)
      // console.log(newList)
 //      $board.append(newList.render().$el)
    });

    console.log(this.$el.find('li').first().attributes())

    this.$el.html($board);
    return this;
  }
});