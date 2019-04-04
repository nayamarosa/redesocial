let database = firebase.database();

$(document).ready(function(){
  $(".btn-create").click(createUser);
});

function createUser(event){
  event.preventDefault();
  
  let name = $(".add-name").val();
  let email = $(".add-email").val();
  let password = $(".add-password").val();
  // console.log(email, password);
  createUserFirebase(email, password);
}

function createUserFirebase(name, email, password){
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(response){
    let userId = response.user.uid;
    
    addUserToDB(userId, name, email);
    
    redirectUser(userId);
  })
  .catch(function(error){
    handleError(error);
  });
}

function addUserToDB(id, name, email){
  database.ref("users/" + id).set({
    name: name,
    mail: email
  });
}

function handleError(error) {
  var errorMessage = error.message;
  alert(errorMessage);
}

function redirectPosts(userId){
  window.location = "feed.html?id=" + userId;
}