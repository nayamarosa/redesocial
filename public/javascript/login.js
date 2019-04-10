$(document).ready(function(){
    $(".btn-login").click(enterLogin);
    $("#checkbox-reminder").click(authPersistence);

});

function enterLogin(event){
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
  