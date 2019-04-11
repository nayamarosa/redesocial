
$(document).ready(function showProfile() { 
    

// $("#profilePicture").on("change", function(event) {
// selectedFile = event.target.files[0];
// })


    $("#profilePicture").fileinput({
        showPreview: false,
        showUpload: false,
        elErrorContainer: '#kartik-file-errors',
        allowedFileExtensions: ["jpg", "png", "gif"]
        //uploadUrl: '/site/file-upload-single'

function uploadFile() {
  let storageRef = firebase.storage().ref('/profilePicture/'+ filename); 
  let filename = selectedFile.name;
  let fileRef = storage().child(filename);
  let uploadTask = storageRef.put(selectedFile);


  uploadTask.on("state_change", function(snapshot) {
  }, function(error) {
  }, function() {
    let downloadURL = uploadTask.snapshot.downloadURL;
  console.log(downloadURL)
  });


};




});





