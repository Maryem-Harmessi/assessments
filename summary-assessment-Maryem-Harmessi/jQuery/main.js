/******Show more info ******/
$(".more-info-btn").click(function(){
    $(".more-info").show()
})
/******Add new Comment ******/
$(".comment-btn").click(function(){
    var textInput=$(".comment-input").val()
    //console.log($(".comment-input").val());
    $(".new-comments").append(textInput)
})

