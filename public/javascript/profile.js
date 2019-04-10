$(document).ready(function showProfile() { 
    
  database.ref('/users/' + USER_ID).once('value')
  .then(function(snapshot){
    let name;
      let childData = snapshot.val();
       name = childData.name
       
     publicName(name)
    })

function publicName(name) {
    $("#user-name").append(`${name}`)
}
     
});