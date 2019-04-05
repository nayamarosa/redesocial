$(document).ready(function(){
    $(".btn-login").click(enterLogin);
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
    var errorMessage = error.message;
    alert(errorMessage);
}

function redirectPosts(userId){
    window.location = "feed.html?id=" + userId;
}