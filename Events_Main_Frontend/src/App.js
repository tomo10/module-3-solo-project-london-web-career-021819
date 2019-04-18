class App {
    //responsible for higher level stuff like attaching ELs
    
    constructor() {
        // this.adapter = new Adapter()
        this.state = {
            users: [],
            events: [],
            selectedUser: null
            
        }
    }
     
    // fetch users from DB
    // fetchUsersFromDb() {
    //     return API.fetchUsers()
    // }
    
     attachEventListeners() {
        //renders event form 
        document.querySelector('#create-event-btn').addEventListener('click', e => {
        document.querySelector('#update').innerHTML = Event.renderNewEventForm()


        //responds to event data being submitted from form
        const form = document.querySelector('#form')
        document.querySelector('#update').addEventListener('submit', e => {
            e.preventDefault() 
            //assigning data from form to variables 
            const title = e.target.title.value  
            const date = e.target.date.value 
            const image_url = e.target.image_url.value
            const user_id = form.person.value
              
            const eventX = {title: title,
                            user_id: user_id,
                            date: date,
                            image_url: image_url}
            
            const eventToDB = new Event(eventX)
            
            API.createEvent(eventToDB)
                
        })
        })
        
        //renders create user form
        
        document.querySelector('#create-user-btn').addEventListener('click', e => {
        document.querySelector('#create_user').innerHTML = Event.renderNewUserForm()

            //adds event listed to submit new user info. Doesnt work!
            const newUserForm = document.querySelector('#user-form-create')
        document.querySelector('#create_user').addEventListener('submit', e => {
            e.preventDefault()
            
            const name = e.target.name.value
            const userX = {name: name}
             
            API.createUser(userX)
            this.state.selectedUser = userX
            this.state.users.push(userX)
             
        })
        })

        //ability to see Event
        
        document.addEventListener('click', e => {
            if (e.target.className == 'event-btn') {
             
            const intZ = parseInt(e.target.id)
            const eventZ = objApp.state.events.find(obj => obj.id == intZ)
              
            document.querySelector('#view-event-page').innerHTML = Event.renderEventPage(eventZ)
                
        }
        })

        //ability to delete Event 
        document.addEventListener('click', e => {
            if (e.target.className == 'delete-btn') {
                
                const intEvent = parseInt(e.target.id)
                const eventDel = objApp.state.events.find(obj => obj.id == intEvent)
                 
                API.deleteEvent(eventDel)  
            }
        })

    }
}