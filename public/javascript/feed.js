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
        // console.log("chave:", childKey);
        // console.log("chave:", childData);
removePosts()

      });
    });
  }
  
  function createPostList(key, text) {
    $(".posts-list").append(`
    <li>
    <span>${text}</span>
    <i data-toggle="modal" class="remove-modal" data-id=${key} data-target="#remove-post-modal">EXCLUIR</i>
    </li> `);
  }

  function removePosts(){
    $(".remove-modal").click(function() {

      let key = $(this).data("id");
      removePostsTwo(key);
      
    })
    function removePostsTwo(key){
      $(".remove-post").click(function(){
        $("i[data-id='"+ key + "']").parent().remove();   
        database.ref("posts/" + USER_ID + "/" + key).remove();

        $('#remove-post-modal').modal('hide')
      })
    }
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //início da zona da ana//
  
  //----Contador de likes//
  
  // let starCountRef = firebase.database().ref("posts/" + USER_ID + '/starCount');
  
  // $("#botãodelikes").click(function (){
  //   starCountRef.on('value', function(snapshot) {
  //     updateStarCount(postElement, snapshot.val());
  //   });
  
  // });
  
  //botão de logout//
  $("#button-logout").click(signOut);
  
  function signOut(){
    firebase.auth().signOut()
    .then(function() {
      window.location = "login.html"
    })
    .catch(function(error) {
      console.error('Sign Out Error', error);
    });
  };
  
  
});










































//fim da zona da ana// 
//início da zona da nay//

