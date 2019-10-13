document.addEventListener("turbolinks:load", function() {
  // 日付クリック////////////
  $('#calendar').fullCalendar({
    defaultDate: $('.theyear').val() + "-" + $('.themonth').val() + "-" + "15",
    dayClick: function(date, jsEvent, view) {
      const theday = $(this).data('date').split('-');
      location.href = '/years/' + theday[0] + '/months/' + theday[1] + '/days/' + theday[2]
    }
  });
  // キーボードでカレンダーめくる
  var left  = 0;
  var right = 0;
  // キーボード押した
  function keydown(event){
    if(event.keyCode == 37){ left = 1; }
    if(event.keyCode == 39){ right = 1; }
    disp() 
  }
  // キーボード話した
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