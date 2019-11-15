document.addEventListener("turbolinks:load", function() {
  // キーボードでカレンダーめくる
  var left  = 0;
  var right = 0;
  // キーボード押した
  function keydown(event){
    if(event.keyCode == 37){ left = 1; }
    if(event.keyCode == 39){ right = 1; }
    disp() 
  }
  // キーボード離した
  function keyup(event){
    if(event.keyCode == 37){ left = 0; }
    if(event.keyCode == 39){ right = 0; }
  }
  function disp(){
    if(left==1)  { $('.fc-prev-button').click() }
    if(right==1) { $('.fc-next-button').click() }
  }
  document.onkeydown = keydown
  document.onkeyup   = keyup
});