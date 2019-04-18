class Event {
//holds Event class methods and associated functionality

    constructor(data) {
      this.user_id = data.user_id;
      this.title = data.title;
      this.date = data.date;
      this.image_url = data.image_url;
      Event.all.push(this);
      
    }
  
    static renderListItem(event) {
      return `
      <li>
        <h3>${event.title}
          <button id='${event.id}-view-event-btn' class='event-btn' data-id=${event.id}>View event</button>
        </h3>
        <h4>${event.date}</h4>
      </li>`;
    }


    static renderNewEventForm() {
       
        return `
        <form id='form'>
            <label>Event Title</label>
          <p>
            <input type="text" name="title" value="${this.title}" />
          </p>
            <select name='person'>
            ${objApp.state.users.map(user => {
              return (`<option value=${user.id}>${user.name}</option>`)
            })}
              
            </select>
          </p>
            <label>Date</label>
          <p>
            <input type="text" name="date" value="${this.date}" />
          </p>
            <label>IMAGE Url</label>
          <p>
            <input type="text" name="image_url" value="${this.image_url}" />
          </p>
            <button type='submit'>Create Event</button>
        </form>
        `
    }


    static renderNewUserForm() {
      return `
      <form id='user-form-create'>
          <label>User's name</label>
              <p>
              <input type="text" name="name" value="" />
              </p>
              <button id='user-submit-btn' type='submit'>Create User</button>

      </form>
      `
    }

    static renderEventPage(event) {
      return `
      <h2>${event.title}</h2>
      <h3>${event.date}</h3>
      <h4>Date: ${event.date}</h4>
      <button id='${event.id}-delete-event-btn' class='delete-btn' type='delete'>Delete Event</button>
      `
    }
  }
  
  Event.all = [];