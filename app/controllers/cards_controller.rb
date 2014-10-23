class CardsController < ApplicationController
  def create
    card = Card.new(card_params)

    if card.save
      render json: card
    else
      render json: card, status: :unprocessable_entity
    end
  end

  def update
    card = Card.find(params[:id])

    if card.update_attributes(card_params)
      render json: card
    else
      render json: card, status: :unprocessable_entity
    end
  end

  def destroy
    card = Card.find(params[:id])
    card.destroy
    render json: card
  end

  def card_params
    params.require(:card).permit(:title, :description)
  end
end
