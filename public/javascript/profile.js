$(document).ready(function showProfile() { 
<<<<<<< HEAD

    database.ref('/users/' + USER_ID).once('value')
    .then(function(snapshot){
      snapshot.forEach(function(childSnapshot) {
        let childKey = childSnapshot.key;
        let childData = childSnapshot.val();
         console.log(childSnapshot, childKey, childData);
      })
    });
});	});




  function editProfile() {


     // function writeUserData(USER_ID) {
  //   firebase.database().ref('profile/' + USER_ID).set({
  //     birthdate: Date
  //     city: textCity
  //     email: email 
  //     phone: phone
  //     profile_picture: imageUrl
  //     password: password 
  //     username: name
  //   });
  }

//a partir daqui são os comandos para troca de img de avatar//

  $imgSrc = $('#imgProfile').attr('src');
  
  function readURL(input) {

      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('#imgProfile').attr('src', e.target.result);
          };

          reader.readAsDataURL(input.files[0]);
      }
  }
  $('#btnChangePicture').on('click', function () {
      // document.getElementById('profilePicture').click();
      if (!$('#btnChangePicture').hasClass('changing')) {
          $('#profilePicture').click();
      }
      else {
          // change
      }
  });
  $('#profilePicture').on('change', function () {
      readURL(this);
      $('#btnChangePicture').addClass('changing');
      $('#btnChangePicture').attr('value', 'Confirm');
      $('#btnDiscard').removeClass('d-none');
      // $('#imgProfile').attr('src', '');
  });
  $('#btnDiscard').on('click', function () {
      // if ($('#btnDiscard').hasClass('d-none')) {
      $('#btnChangePicture').removeClass('changing');
      $('#btnChangePicture').attr('value', 'Change');
      $('#btnDiscard').addClass('d-none');
      $('#imgProfile').attr('src', $imgSrc);
      $('#profilePicture').val('');
      // }
  });


=======
>>>>>>> 4058a7e302c6da5798ab633c025118e3131d3f91

  database.ref('/users/' + USER_ID).once('value')
    .then(function(snapshot){
      snapshot.forEach(function(childSnapshot) {
        let childKey = childSnapshot.key;
        let childData = childSnapshot.val();


        console.log(childSnapshot, childKey, childData);
      })
    });
});

    