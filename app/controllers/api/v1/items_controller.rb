class Api::V1::ItemsController < ApplicationController

  def index
  @items = Item.all
  respond_with(@items)
  end

  def create
    Item.create(item_params)
  end

  def destroy
    Item.destroy(params[:id])
  end

  def update
    item = Item.find(params["id"])
    item.update_attributes(item_params)
    respond_with item, json: item

  end

private

  def item_params
     params.require(:item).permit(:id, :name, :description)
  end
end
