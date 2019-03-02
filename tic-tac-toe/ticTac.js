function func1() {
  alert("I made a pop-up");
}
window.onload=func1;


// newimg = sprite_add("/mario.png",1,false,false,0,0);

$(function() {
$('.toad').click(function(){
  $("#bg").attr('src',"/mario.png");
  return false;
});
});