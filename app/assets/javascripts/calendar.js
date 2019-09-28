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
  $('.fc-button').on('click', function(e){
    e.preventDefault();
    const month = $('h2')[0].innerText.replace('年', '').replace('月', '').split(' ')
    href = '/years/' + month[0] + '/months/' + month[1]
    const theyear = month[0]
    const themonth = month[1]
    console.log(gon.howmuches)
    console.log(theyear)
    console.log(themonth)
    console.log(href)
    $.ajax({
      url: href,
      type: 'GET',
      dataType: 'json',
      })
      .done(function(){
        $('#calendar').fullCalendar('removeEvents');
        $('#calendar').fullCalendar('addEventSource', '');
        $('#calendar').fullCalendar('rerenderEvents' );
      })
    })
});