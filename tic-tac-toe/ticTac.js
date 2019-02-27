function func1() {
    alert("I made a pop-up");
  }
  window.onload=func1;
  

  newimg = sprite_add("/mario.png",1,false,false,0,0);

  with (instance_create(x, y, obj_blank)) {
    index = 1;
    instance_change(obj_player, true);
}