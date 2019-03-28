$(document).ready(function(){
  $("#register").click(function(){
    let email= $("#email").val();
    let password = $("#password").val();
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    
    .then(function(){
      window.location = "main.html"
    })
 
    .catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    });
  });
});


$("#button-login").click(function(){
  let email= $("#email").val();
  let password = $("#password").val();
  firebase.auth().signInWithEmailAndPassword(email, password)
   .then(function(){
      window.location = "main.html"
    })
  .catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
  });

  
 

});





