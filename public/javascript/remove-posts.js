function addHandlerRemovePosts(){
    $(".remove-modal").click(function() {
        
        let key = $(this).data("id");
        removePostsTwo(key);
        
    })
    function removePostsTwo(key){
        $(".remove-post").click(function(){
            $("i[data-id='"+ key + "']").parent().parent().remove();   
            database.ref("posts/" + USER_ID + "/" + key).remove();
            
            $('#remove-post-modal').modal('hide')
        })
    }
}