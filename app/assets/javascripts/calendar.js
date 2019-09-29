document.addEventListener("turbolinks:load", function() {

  $(document).ready(function(){
    $('#calendar').fullCalendar({
    })
  });
  
  // 日付クリック////////////
  $('#calendar').fullCalendar({
    dayClick: function(date, jsEvent, view) {
      const theday = $(this).data('date').split('-');
      location.href = '/years/' + theday[0] + '/months/' + theday[1] + '/days/' + theday[2]
    }
  });
});