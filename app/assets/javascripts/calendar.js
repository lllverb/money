document.addEventListener("turbolinks:load", function() {
  // 日付クリック////////////
  console.log($('.theyear').val())
  console.log($('.themonth').val())
  var today = $('.theyear').val() + "-" + $('.themonth').val() + "-" + "15"
  console.log(today)
  $('#calendar').fullCalendar({
    defaultDate: $('.theyear').val() + "-" + $('.themonth').val() + "-" + "15",
    dayClick: function(date, jsEvent, view) {
      const theday = $(this).data('date').split('-');
      location.href = '/years/' + theday[0] + '/months/' + theday[1] + '/days/' + theday[2]
    }
  });
});