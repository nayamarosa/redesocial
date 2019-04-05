$(document).ready(function(){
    $(".btn-login").click(enterLogin);
    $("#checkbox-reminder").click(authPersistence);

});

function enterLogin(event){
    event.preventDefault();
    
    let email = $(".login-email").val();
    let password = $(".login-password").val();
    // console.log(email, password);
    loginUserFirebase(email, password);  
}

function loginUserFirebase(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(response){
        let userId = response.user.uid;
        redirectPosts(userId);
    })
    .catch(function(error){
        handleError(error);
    });
}

function handleError(error) {
    let errorMessage = error.message;
    alert(errorMessage);
}

function redirectPosts(userId){
    window.location = "/public/html/feed.html?id=" + userId;
}
















//persistência da autenticação( quando o usuário aciona a caixa de lembrar login)//

function authPersistence() {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
      return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
  });
}
  