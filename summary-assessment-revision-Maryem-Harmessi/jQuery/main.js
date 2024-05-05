$(function() {
  var counter = $(".count").html()
$(".upvote").on("click",function(){
counter++
console.log(counter)
$(".count").html(counter)
})
$(".downvote").on("click",function(){
  counter--
  console.log(counter)
  $(".count").html(counter)
  })
});