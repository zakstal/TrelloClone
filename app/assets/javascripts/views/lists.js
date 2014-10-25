TrelloClone.Views.List = Backbone.CompositeView.extend({
  template: JST['list'],

  cardFormTemp: JST['card_form'],

  className: 'rounded-boarder list-list group',

  events: {
    "click .delete-list": "deleteList",
    "click .submit-card": "createCard",
    "click .toggle-form-show": "toggelForm"
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
    var newDiv = $('<ul class="inner-cards-list group">')
    this.model.cards().each(function(card){     //
      var renderedList = new TrelloClone.Views.Card({model: card})

     newDiv.append(renderedList.render().$el);
    });

    this.$el.append(newDiv)
    this.renderFormTemplate()
    this.$el.append('<a  class="toggle-form-show open-add-card">Add a card...</a>')

  },

  createCard: function(event) {
    event.preventDefault();
    var $event = $(event.currentTarget)
    var params = $event.parent().serializeJSON();
    if (params.card.description !== "") this.model.cards().create(params);
  },


  deleteList: function(event) {
    this.model.destroy();
  },

  renderFormTemplate: function () {
    this.form = $(this.cardFormTemp({
      list: this.model
    }));

    this.$el.append(this.form);
  },

  toggelForm: function(event) {
    var $target = $(event.currentTarget)
    var $form = $(this.form)
    $target.removeClass('toggle-form-show');
    $target.addClass('toggle-form-hide')
    $form.removeClass('toggle-form-hide')
    $form.addClass('toggle-form-show')
  }



});