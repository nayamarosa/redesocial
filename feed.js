const database = firebase.database();
const USER_ID = window.location.search.match(/\?id=(.*)/)[1];

$(document).ready(function(){
  getPostsfromDB();
  $(".add-posts").click(addPostsClick);
});
   
function addPostsClick(event) {
  event.preventDefault();
 
   let newPost = $(".posts-input").val();
   $(".posts-input").val("");
   let postsFromDB = addPoststoDB(newPost);
  createListItem(postsFromDB.key, newPost)
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

      createListItem(childKey, childData.text);
      // console.log("chave:", childKey);
      // console.log("chave:", childData);
    });
  });
}

function createListItem(key, text) {
  $(".posts-list").append(`
   <li>
    <input type="checkbox"data-post-id=${key} />
    <span>${text}</span>
   </li> `);
   $(`input[data-post-id="${key}"]`).click(function() {
    database.ref("posts/" + USER_ID + "/" + key).remove();
    $(this).parent().remove();
    
  })
}