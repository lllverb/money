document.addEventListener("turbolinks:load", function() {

  $(document).ready(function(){
    $('#calendar').fullCalendar({
    })
  });

  $('#calendar').fullCalendar({
    dayClick: function(date, jsEvent, view) {
      const theday = $(this).data('date');
      console.log(theday.split('-'));
      console.log(theday.split('-')[0]);

    }
  });

});