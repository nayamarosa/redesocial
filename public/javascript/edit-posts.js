function updatePosts(){
  let message;
  $(".update-modal").click(function() {
    
    $("#update-post").val($(this).prev().text());
    message = $(this).prev();
    
    let key = $(this).data("id");
    updatePostsTwo(key);
    
  })
  function updatePostsTwo(key){
    $(".update-post").click(function(){
      database.ref("posts/" + USER_ID + "/" + key).update({
        text: $("#update-post").val()
      });      
      message.text($("#update-post").val());
      
      $('#update-post-modal').modal('hide')
    })
  }
}