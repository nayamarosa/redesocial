
$(document).ready(function showProfile() { 
    

$("#input-b9").on("change", function(event) {
selectedFile = event.target.files[0];
})

// function fileInput() {
//     $("#input-b9").fileinput({
//         showPreview: false,
//         showUpload: false,
//         elErrorContainer: '#kartik-file-errors',
//         allowedFileExtensions: ["jpg", "png", "gif"]
//         //uploadUrl: '/site/file-upload-single'
//     });

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





