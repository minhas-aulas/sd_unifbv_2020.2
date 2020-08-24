class EnquetesController < ApplicationController

  # GET /enquetes
  def index
    beers = Enquete.where(beer: 1).count
    milks = Enquete.where(milk: 1).count

    render json: { beers: beers, milks: milks}
  end

  # POST /enquetes
  def create
    @enquete = Enquete.new(enquete_params)

    if @enquete.save
      render json: @enquete, status: :created, location: @enquete
    else
      render json: @enquete.errors, status: :unprocessable_entity
    end
  end

  private
    # Only allow a trusted parameter "white list" through.
    def enquete_params
      params.require(:enquete).permit(:beer, :milk)
    end
end
