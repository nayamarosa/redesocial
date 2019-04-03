var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];

$(document).ready(function(){
  getTasksfromDB();
  $(".add-tasks").click(addTasksClick);
});
   
function addTasksClick(event) {
  event.preventDefault();

   var newTask = $(".tasks-input").val();
   $(".tasks-input").val("");
   var tasksFromDB = addTakstoDB(newTask);
  createListItem(tasksFromDB.key, newTask)

}

function addTakstoDB(text){
  return database.ref("/tasks/" + USER_ID).push({
    text: text
  });
}

function getTasksfromDB() {
  database.ref('/tasks/' + USER_ID).once('value')
  .then(function(snapshot){
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();

      createListItem(childKey, childData.text);
      // console.log("chave:", childKey);
      // console.log("chave:", childData);
    });
  });
}

function createListItem(key, text) {
  $(".tasks-list").append(`
   <li>
    <input type="checkbox"data-task-id=${key} />
    <span>${text}</span>
   </li> `);
   $(`input[data-task-id="${key}"]`).click(function() {
    database.ref("tasks/" + USER_ID + "/" + key).remove();
    $(this).parent().remove();

  })
}