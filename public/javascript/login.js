$(document).ready(function() {

  $(".btn-login").click(enterLogin);
  $(".login-google").click(loginWithGoogle);
  // $(".login-fb").click(loginWithFacebook);
  $("#checkbox-reminder").click(authPersistence);
  
});

<<<<<<< HEAD
function enterLogin(event){
  event.preventDefault();  
=======
function enterLogin(event) {
  event.preventDefault();
  
>>>>>>> 4058a7e302c6da5798ab633c025118e3131d3f91
  let email = $(".login-email").val();
  let password = $(".login-password").val();
  loginUserFirebase(email, password);  
};

function loginUserFirebase(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(response){
    let userId = response.user.uid;
    redirectPosts(userId);
  })
  .catch(function(error){
    handleError(error);
  });
};

function authPersistence() {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error){
    handleError(error);
  });
}

function handleError(error) {
  let errorMessage = error.message;
  alert(errorMessage);
};

function redirectPosts(userId){
  window.location = "../feed.html?id=" + userId;
<<<<<<< HEAD
}
    event.preventDefault();
    let email = $(".login-email").val();
    let password = $(".login-password").val();
    loginUserFirebase(email, password);  
};

function loginUserFirebase(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(response){
        let userId = response.user.uid;
        redirectPosts(userId);
    })
    .catch(function(error){
        handleError(error);
    });
};

function redirectPosts(userId){
  window.location = "../feed.html?id=" + userId;
};

function handleError(error) {
    let errorMessage = error.message;
    alert(errorMessage);
};




=======
};
>>>>>>> 4058a7e302c6da5798ab633c025118e3131d3f91


