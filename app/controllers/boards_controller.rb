class BoardsController < ApplicationController

  def index
    puts "!!!!!!!!!!!!!!!!!!!!!"
    @board = Board.all
    render :json => @board
  end

  def create
    board = Board.new(board_params)

    if board.save
      render json: board
    else
      render json: board, status: :unprocessable_entity
    end
  end

  def update
    board = Board.find(params[:id])

    if board.update_attributes(board_params)
      render json: board
    else
      render json: board, status: :unprocessable_entity
    end
  end

  def destroy
    board = Board.find(params[:id])
    board.destroy
    render json: board
  end

  def params
    params.require(:board).permit(:title)
  end
end
