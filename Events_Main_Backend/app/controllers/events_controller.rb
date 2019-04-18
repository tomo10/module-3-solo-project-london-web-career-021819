class EventsController < ApplicationController

    def show 
        event = Event.find_by(id: params[:id])
        # turning ruby hash to json.  below is being stringified and then sent 2 user
        if event 
            render json: event
        else 
            render json: {error: "Image not found."}, status: 404
        end 
    end 


    def index 
        events = Event.all 
        render json: events
    end 

    
    def create 
        newEvent = Event.new(title: params[:title], user_id: params[:user_id], date: params[:date], image: params[:image_url])
        if newEvent.save
            render json: newEvent 
        else 
            render json: { error: "Unable to create event." }, status: 400 
        end 
    end 

    def destroy 
        event_del = Event.find_by(id: params[:id])
        event_del.destroy

    end 




end
