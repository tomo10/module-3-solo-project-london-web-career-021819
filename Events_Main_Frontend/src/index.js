const objApp = new App

document.addEventListener('DOMContentLoaded', () => {
   
    //this step creates a new app instance so we can run ELs
    objApp.attachEventListeners() 
    API.fetchUsers().then(function(data) {
    objApp.state.users = data
    })  
    
    API.fetchEvents()
    .then(json => {
      objApp.state.events = json
       
        json.forEach(event => {           
          document.querySelector('#events-list').innerHTML += Event.renderListItem(event)
          
          
        })
      });
  });

  

  