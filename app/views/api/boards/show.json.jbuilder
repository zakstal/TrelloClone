# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

  json.(@board, :title, :id, :created_at, :updated_at)
  json.lists @board.lists do |list|
    json.(list, :title, :id, :board_id, :ord)
    json.cards list.cards do |card|
      json.(card, :title, :id, :list_id, :description, :ord)
    end
  end
