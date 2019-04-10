function loginWithGoogle(){
  let provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    
    var token = result.credential.accessToken;
    var user = result.user;
    
  }).catch(function(error){
    handleError(error);
  });
  
}