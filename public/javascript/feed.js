const database = firebase.database();
const USER_ID = window.location.search.match(/\?id=(.*)/)[1];

$(document).ready(function() {
  getPostsfromDB();
  $(".add-posts").click(addPostsClick);
  $(".order-select-options").change(function(){
    let btnSelect = $(".order-select-options option:selected").val();
    filterBySelectOptions(btnSelect);
  })
  $("#button-logout").click(signOut);
  
  function filterBySelectOptions(btnSelect) {
    $(".posts-list").html("");
    firebase.database().ref("posts/" + USER_ID).orderByChild("selectOptions").equalTo(btnSelect).once("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        let childKey = childSnapshot.key;
        let childData = childSnapshot.val();
        createPostList(childKey, childData.text, childData.fav);
        console.log(btnSelect);
      });
    })
  };

  function addPostsClick(event) {
    event.preventDefault();
    let newPost = $(".posts-input").val();
    $(".posts-input").val("");
    let selectOptions = $(".option-selected").val();
    let postsFromDB = addPoststoDB(newPost, selectOptions);
    let favInitial = 0;
    createPostList(postsFromDB.key, newPost, favInitial);
    $('#add-post-modal').modal('hide')
  };

  function addPoststoDB(text, select){
    return database.ref("/posts/" + USER_ID).push({
      text: text,
      selectOptions: select,
      fav:0
    });
  };

  function getPostsfromDB() {
    database.ref('/posts/' + USER_ID).once('value')
    .then(function(snapshot){
      snapshot.forEach(function(childSnapshot) {
        database.ref('/users/' + USER_ID).once('value')
        .then(function(snapshot){
          let childDataName = snapshot.val();
          let childKey = childSnapshot.key;
          let childData = childSnapshot.val();

        createPostList(childKey, childData.text, childData.fav, childData.name);
        });
      });
    });
  };

  function createPostList(key, text, fav, name) {
    $(".posts-list").append(`
    <li class="posts">
    <div>
    <span>${name}</span>
    <span>${text}</span>
    <i data-toggle="modal" class="update-modal" data-id="${key}" data-message="${text}" data-target="#update-post-modal">
    <img src="icons/edit.png" alt="editar" id="button-logout" value="EDIT">
    </i>
    <i data-toggle="modal" class="remove-modal" data-id="${key}" data-target="#remove-post-modal">
    <img src="icons/delete.png" alt="remover" id="button-logout" value="REMOVE">
    </i>
    </div>
    <div>
    <i data-toggle="modal" class="favorite-modal" data-id="${key}" data-target="#favorite-post-modal">
    <img src="icons/like.png" alt="like" id="button-logout" value="LIKE">
    </i>
    <i data-toggle="modal" class="favorite-count-modal roboto-font-family font-p" data-id="${key}" data-target="#favorite-count-modal"> ${fav}</i>
    </div>
    </li> `);
    removePosts();
    updatePosts();
    favoriteCount(key);
  };

  function signOut() {
    firebase.auth().signOut()
    .then(() => {window.location = "index.html"})
    .catch((error) => {console.error(error)});
  };


  $(".posts-input").keyup(function() {
    if ($('.posts-input').val() === '' ) {
      $('.add-posts').attr('disabled', true);
      return;
    }
    $('.add-posts').attr('disabled', false);


  });





});

