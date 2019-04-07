const database = firebase.database();
const USER_ID = window.location.search.match(/\?id=(.*)/)[1];

$(document).ready(function(){
  getPostsfromDB();
  $(".add-posts").click(addPostsClick);
  
  function addPostsClick(event) {
    event.preventDefault();
    
    let newPost = $(".posts-input").val();
    $(".posts-input").val("");
    let postsFromDB = addPoststoDB(newPost);
    createPostList(postsFromDB.key, newPost);
    
    $('#add-post-modal').modal('hide')
  }
  
  function addPoststoDB(text){
    return database.ref("/posts/" + USER_ID).push({
      text: text
    });
  }
  
  function getPostsfromDB() {
    database.ref('/posts/' + USER_ID).once('value')
    .then(function(snapshot){
      snapshot.forEach(function(childSnapshot) {
        let childKey = childSnapshot.key;
        let childData = childSnapshot.val();
        
        createPostList(childKey, childData.text);
      });
    });
  }
  
  function createPostList(key, text) {
    $(".posts-list").append(`
    <li>
    <span>${text}</span>
    <i data-toggle="modal" class="remove-modal" data-id=${key} data-target="#remove-post-modal">EXCLUIR</i>
    <i data-toggle="modal" class="update-modal" data-id=${key} data-target="#update-post-modal">EDITAR</i>
    </li> `);
    
    removePosts();
    updatePosts();
  }

  $("#button-logout").click(signOut);

function signOut(){
  firebase.auth().signOut()
  .then(function() {
    window.location = "index.html"
  })
  .catch(function(error) {
    console.error('Sign Out Error', error);
  });
}

})
