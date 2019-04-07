function updatePosts(){
    $(".update-modal").click(function() {
        
        $("#update-post").val($(this).prev().prev().text());
        
        
        let key = $(this).data("id");
        updatePostsTwo(key);
        
    })
    function updatePostsTwo(key){
        $(".update-post").click(function(){
            database.ref("posts/" + USER_ID + "/" + key).update({
                text: $("#update-post").val()
            });      
            
            $('#update-post-modal').modal('hide')
        })
    }
}