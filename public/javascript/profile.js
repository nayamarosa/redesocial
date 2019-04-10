$(document).ready(function showProfile() { 

  database.ref('/users/' + USER_ID).once('value')
    .then(function(snapshot){
      snapshot.forEach(function(childSnapshot) {
        let childKey = childSnapshot.key;
        let childData = childSnapshot.val();


        console.log(childSnapshot, childKey, childData);
      })
    });
});

    