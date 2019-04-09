const database = firebase.database();
const USER_ID = window.location.search.match(/\?id=(.*)/)[1];

$(document).ready(function(){
  getPostsfromDB();
  $(".add-posts").click(addPostsClick);
  $(".select-options").change(filterBySelectOptions);
  
  function filterBySelectOptions() {
    var selectedOption = database.ref("/posts/" + USER_ID).orderByChild("selectOptions");
    return selectedOption;
  }
  
  function addPostsClick(event) {
    event.preventDefault();
    
    let newPost = $(".posts-input").val();
    $(".posts-input").val("");
    let selectOptions = $("#select-options option:selected").val();
    let postsFromDB = addPoststoDB(newPost, selectOptions);
    createPostList(postsFromDB.key, newPost);
    console.log(selectOptions);


    
    // let postsFromDB = addPoststoDB(newPost);
    // let favInitial = 0;
    // createPostList(postsFromDB.key, newPost, favInitial);
    
    // let selectOptions = $(".select-options").val();
    // let postsFromDB = addPoststoDB(newPost, selectOptions);
    // createPostList(postsFromDB.key, newPost);

    $('#add-post-modal').modal('hide')
  }
  
  function addPoststoDB(text, select){
    return database.ref("/posts/" + USER_ID).push({
      text: text,
      selectOptions: select,
      fav:0
    });
  }
  
  function getPostsfromDB() {
    database.ref('/posts/' + USER_ID).once('value')
    .then(function(snapshot){
      snapshot.forEach(function(childSnapshot) {
        let childKey = childSnapshot.key;
        let childData = childSnapshot.val();
        
        createPostList(childKey, childData.text, childData.fav);
      });
    });
  }
  
  function createPostList(key, text, fav) {
    
    $(".posts-list").append(`
    <li>
    <span>${text}</span>
    <i data-toggle="modal" class="update-modal" data-id=${key} data-target="#update-post-modal">EDITAR</i>
    <i data-toggle="modal" class="remove-modal" data-id=${key} data-target="#remove-post-modal">EXCLUIR</i>
    <i data-toggle="modal" class="favorite-modal" data-id=${key} data-target="#favorite-post-modal">FAVORITAR</i>
    <i data-toggle="modal" class="favorite-count-modal" data-id=${key} data-target="#favorite-count-modal"> ${fav}</i>
    </li> `);
    
    removePosts();
    updatePosts();
    favoriteCount(key);
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
