class API {
    //resposible for hadingly POST, PATCH etc requests. Server interaction.
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    static fetchEvents() {
        return fetch("http://localhost:3000/events").then(res => res.json())
    }

    //create Event
    static createEvent(event) {
        return fetch("http://localhost:3000/events", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(event)
        }).then(res => res.json())
    }

    //create User 
    static createUser(user) {
        return fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
    }

    //fetch User from params
    static fetchUsers() {
        return fetch("http://localhost:3000/users").then(res => res.json())
    }

    //delete Event
    static deleteEvent(event) {
        return fetch(`http://localhost:3000/events/${event.id}`, {
            method: 'DELETE'
        }).then(res => res.json())
    }

}