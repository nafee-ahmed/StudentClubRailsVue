class ClubsController < ApplicationController
  before_action :authorize_request, except: :create
  def create
    data = [
      { title: 'Club 1', about: 'This is club 1', fee: 100, pastActiveMembers: 200, contactName: 'John Doe',
        contact: '011343890' },
      { title: 'Club 2', about: 'This is club 1', fee: 100, pastActiveMembers: 200, contactName: 'John Doe',
        contact: '011343890' },
      { title: 'Club 3', about: 'This is club 1', fee: 100, pastActiveMembers: 200, contactName: 'John Doe',
        contact: '011343890' }
    ]

    begin
      clubs = Club.create(data)
      render json: { msg: clubs }
    rescue ActiveRecord::RecordInvalid => e
      puts "Error occurred while saving records: #{e.message}"
    end
  end

  def index
    @clubs = Club.left_outer_joins(:users)
                 .where(users: { id: nil })
    render json: { msg: @clubs }
  end

  # apply to club
  def update
    sleep 5
    @club = Club.find(params[:id])
    @club.users << @current_user unless @club.users.include?(@current_user)
    render json: { msg: @club }
  rescue ActiveRecord::RecordNotFound
    render json: { msg: 'Club not found' }, status: :not_found
  rescue StandardError => e
    render json: { msg: e.message }, status: :unprocessable_entity
  end

  def show
    club = Club.find(params[:id])
    club_exists = @current_user.clubs.exists?(params[:id])
    new_club = club.attributes.merge(applied: club_exists)
    render json: { msg: new_club }
  rescue StandardError => e
    render json: { msg: e.message }, status: :unprocessable_entity
  end

  def applied_clubs
    clubs = Club.joins(:users).where(users: { id: @current_user.id })
    render json: { msg: clubs }
  end
end
