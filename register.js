$(document).ready(function(){
    $(".btn-create").click(createLogin);
});

function createLogin(event){
    event.preventDefault();
    
    let name = $(".add-name").val();
    let email = $(".add-email").val();
    let password = $(".add-password").val();
    // console.log(email, password);
    createUserFirebase(name, email, password);
  }
  
  function createUserFirebase(name, email, password){
    firebase.auth().createUserWithEmailAndPassword(name, email, password)
    .then(function(response){
      let userId = response.user.uid;
      redirectPosts(userId);
    })
    .catch(function(error){
      handleError(error);
    });
  }

  function handleError(error) {
    var errorMessage = error.message;
    alert(errorMessage);
}

function redirectPosts(userId){
    window.location = "feed.html?id=" + userId;
}