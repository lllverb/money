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

  $('#calendar').on('ajax:complete', function(event) { //  #div はajax通信を行うdiv
    var  response = event.detail[0].response;   // renderされた部分htmlはdetail[0].responseで取得できる
    $('head').append(response);  //head要素に= Gon::Base.render_dataを追加
    console.log(gon.howmuches)
  });
});