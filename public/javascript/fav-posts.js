function favoriteCount(key){
  
  $(`.favorite-modal[data-id=${key}]`).click(function fav(){
    let favNum = $(`.favorite-count-modal[data-id=${key}]`).html();
    favNum = parseInt(favNum)+1;
    $(`.favorite-count-modal[data-id=${key}]` ).html(favNum);
    database.ref("/posts/" + USER_ID + "/" + key ).update({fav: favNum });
  });
};