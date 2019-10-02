document.addEventListener("turbolinks:load", function() {
  // なんかいるやつ//
  history.replaceState(null, document.getElementsByTagName('title')[0].innerHTML, null);
    window.addEventListener('popstate', function(e) {
    window.location.reload();
  });



//何も入力していない時押せないようにする。
  $('#new_howmuch').submit(function() {
    if ($.trim($("#howmuch_name").val()) === "" || $.trim($("#howmuch_money").val()) === ""|| $.trim($("#howmuch_where").val()) === ""|| $.trim($("#created_at").val()) === "") {
        alert('全項目入力してください');
        return false;
    }
  });
  

  
  const backgroundColor = [
    "#CCFFFF", "#99FFFF", "#66FFFF", "#33FFFF", "#00FFFF", 
    "#FFFFCC", "#CCFFCC", "#99FFCC", "#66FFCC", "#33FFCC", "#00FFCC",
    "#FFFF99", "#CCFF99", "#99FF99", "#66FF99", "#33FF99", "#00FF99",
    "#FFFF66", "#CCFF66", "#99FF66", "#66FF66", "#33FF66", "#00FF66",
    "#FFFF33", "#CCFF33", "#99FF33", "#66FF33", "#33FF33", "#00FF33",
    "#FFFF00", "#CCFF00", "#99FF00", "#66FF00", "#33FF00", "#00FF00",
    "#FFCCFF", "#CCCCFF", "#99CCFF", "#66CCFF", "#33CCFF", "#00CCFF",
    "#FFCCCC", "#CCCCCC", "#99CCCC", "#66CCCC", "#33CCCC", "#00CCCC",
    "#FFCC99", "#CCCC99", "#99CC99", "#66CC99", "#33CC99", "#00CC99",
    "#FFCC66", "#CCCC66", "#99CC66", "#66CC66", "#33CC66", "#00CC66",
    "#FFCC33", "#CCCC33", "#99CC33", "#66CC33", "#33CC33", "#00CC33",
    "#FFCC00", "#CCCC00", "#99CC00", "#66CC00", "#33CC00", "#00CC00",
    "#FF99FF", "#CC99FF", "#9999FF", "#6699FF", "#3399FF", "#0099FF",
    "#FF99CC", "#CC99CC", "#9999CC", "#6699CC", "#3399CC", "#0099CC",
    "#FF9999", "#CC9999", "#999999", "#669999", "#339999", "#009999",
    "#FF9966", "#CC9966", "#999966", "#669966", "#339966", "#009966",
    "#FF9933", "#CC9933", "#999933", "#669933", "#339933", "#009933",
    "#FF9900", "#CC9900", "#999900", "#669900", "#339900", "#009900",
    "#FF66FF", "#CC66FF", "#9966FF", "#6666FF", "#3366FF", "#0066FF",
    "#FF66CC", "#CC66CC", "#9966CC", "#6666CC", "#3366CC", "#0066CC",
    "#FF6699", "#CC6699", "#996699", "#666699", "#336699", "#006699",
    "#FF6666", "#CC6666", "#996666", "#666666", "#336666", "#006666",
    "#FF6633", "#CC6633", "#996633", "#666633", "#336633", "#006633",
    "#FF6600", "#CC6600", "#996600", "#666600", "#336600", "#006600",
    "#FF33FF", "#CC33FF", "#9933FF", "#6633FF", "#3333FF", "#0033FF",
    "#FF33CC", "#CC33CC", "#9933CC", "#6633CC", "#3333CC", "#0033CC",
    "#FF3399", "#CC3399", "#993399", "#663399", "#333399", "#003399",
    "#FF3366", "#CC3366", "#993366", "#663366", "#333366", "#003366",
    "#FF3333", "#CC3333", "#993333", "#663333", "#333333", "#003333",
    "#FF3300", "#CC3300", "#993300", "#663300", "#333300", "#003300",
    "#FF00FF", "#CC00FF", "#9900FF", "#6600FF", "#3300FF", "#0000FF",
    "#FF00CC", "#CC00CC", "#9900CC", "#6600CC", "#3300CC", "#0000CC",
    "#FF0099", "#CC0099", "#990099", "#660099", "#330099", "#000099",
    "#FF0066", "#CC0066", "#990066", "#660066", "#330066", "#000066",
    "#FF0033", "#CC0033", "#990033", "#660033", "#330033", "#000033",
    "#FF0000", "#CC0000", "#990000", "#660000", "#330000"
  ]

// 投稿フォームへ
  $(function() {
    var children = $('.children');
    var original = children.html();
  
    $('.parent').change(function() {
      var val1 = $(this).val();
      children.html(original).find('option').each(function() {
        var val2 = $(this).data('val');
        if (val1 != val2) {
          $(this).not('optgroup,.msg').remove();
        }
      });
      if ($(this).val() === '') {
        children.attr('disabled', 'disabled');
      } else {
        children.removeAttr('disabled');
      }
    });
  });

  $('#toformbutton').on('click', function(e){
    e.preventDefault();
    if ($.trim($("#selectcategory").val()) === "") {
      alert('全項目入力してください');
      return false;
  }
    var month = $('h2')[0].innerText.replace('年', '').replace('月', '').split(' ')
    location.href = "/years/" + month[0] + "/months/" + month[1] + "/members/" + $('#selectmember').val() + "/categories/" + $('#selectcategory').val() + "/details/" + $('#selectdetail').val()
  })
  // 投稿フォームへ

  
  
// カレンダーめくる時//
  $('.fc-button').on('click', function(e){
    e.preventDefault();
    href = location.href
    var month = $('h2')[0].innerText.replace('年', '').replace('月', '').split(' ')
    if (href.includes('months')){
      var nowhref = location.href;
      newhref = nowhref.split('/');
      newhref.splice(4, 1, month[0]);
      newhref.splice(6, 1, month[1]);
      var url = newhref.join('/');
    } else {
      var url = '/years/' + month[0] + '/months/' + month[1]
    }
    $.ajax({
      url: url,
      type: 'GET',
      cache: false,
      dataType: 'json',
      })
      .done(function(data){
        $('.howmuches').each(function(e, x){
          $('.hidden').remove();
        })
        const newArray = []
        data.forEach(function(e){
          newArray.push(e);
          buildHTML(e.money)
        })
        resetCanvas();
        if (href.includes('details/')){
          $('.howmuchtable').remove()
          buildTableHTML(e)
          data.forEach(function(e){
            buildTableInner(e)
          })
        } else {
          buildPieChart(howmuch, newArray)
        }
      })
    })


    
  function resetCanvas() {
    $('#myChart').remove();
    $('.myChart').append("<canvas id='myChart'></canvas>");
  }

  function buildHTML(data){
    html = `<input class='howmuches' name='howmuches' type='hidden' value='${data}'>`
    $('body').append(html)
  }

  function buildTableHTML(e){
    upperhtml = `<table border='1' class='howmuchtable'>
                  <tr>
                    <th class='thdetail'>項目</th>
                    <th class='thmoney'>値段</th>
                    <th class='thwhere'>場所</th>
                    <th class='thwhen'>日時</th>
                  </tr>
                </table>`
    $('.howmuchlist').append(upperhtml)
  }

  function buildTableInner(e){
    lowerhtml = `<tr>
                  <td>
                    ${e.name}
                  </td>
                  <td>
                    ${e.money.toLocaleString()}円
                  </td>
                  <td>
                    ${e.where}
                  </td>
                  <td>
                    ${e.when}
                  </td>
                </tr>`
    $('.howmuchtable').append(lowerhtml)
  }

  function shuffle(backgroundColor) {
    var n = backgroundColor.length, t, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      t = backgroundColor[n];
      backgroundColor[n] = backgroundColor[i];
      backgroundColor[i] = t;
    }
    return backgroundColor;
  }

  function buildPieChartDetail(howmuch, howmuches, ids, labels, data, alltotal){
    i = 1
    // 〜idごとに分別//
    while (i <= 10){
      let result = howmuches.filter(function(x){
        if(href.includes('years/')&&href.includes('months/')&&href.includes('members/')&&href.includes('categories/')){
          return x.detail_id == i
        } else if (href.includes('years/')&&href.includes('months/')&&href.includes('members/')){
          return x.category_id == i
        } else if (href.includes('years/')&&href.includes('months/')&&href.includes('members')){
          return x.member_id == i
        } else if (href.includes('years/')&&href.includes('months/')&&href.includes('categories2')&&href.includes('details2')){
          return x.member_id == i
        } else {
          return x.category_id == i
        }
      })//resultというそれぞれのid別に別れた配列を作成。
      total = 0
      // resultの中身をひとつひとつ見ていく
      result.map(x => x).forEach(function(x){
        if(href.includes('years/')&&href.includes('months/')&&href.includes('members/')&&href.includes('categories/')){
          var id = x.detail_id
        } else if (href.includes('years')&&href.includes('months')&&href.includes('members/')){
          var id = x.category_id
        } else if (href.includes('years')&&href.includes('months')&&href.includes('members')){
          var id = x.member_id
        } else if (href.includes('years')&&href.includes('months')&&href.includes('categories2')&&href.includes('details2')){
          var id = x.member_id
        } else {
          var id = x.category_id
        }
        total += x.money
        // howmuch(ラベル)のidとresultのidを見比べる
        //indexOf == -1はなかったら追加する。
        howmuch.forEach(function(e){
          if (e.id == id && labels.indexOf(e.name) == -1) {
              ids.push(e.id);
              labels.push(e.name);
            }
        })
      })
      if(total != 0){
        data.push(total)
        alltotal += total
      }
      i += 1
    }

    html = `<p>${alltotal.toLocaleString()}円</p>`
    $('p').remove()
    $('.myChart').append(html)
  }

  function buildPieChart(howmuch, howmuches){
    const labels = [];
    const data   = [];
    let alltotal = 0;
    var ids    = []
    href = location.href
    buildPieChartDetail(howmuch, howmuches, ids, labels, data, alltotal)

      // 円グラフ//
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          backgroundColor: shuffle(backgroundColor),
          data: data,
        }]
      }
    })
      // 円グラフ//
// リンク付与///////
    document.getElementById("myChart").onclick = function(evt){
      const activePoints = myChart.getElementsAtEvent(evt);
      var month = $('h2')[0].innerText.replace('年', '').replace('月', '').split(' ')
      if(activePoints.length > 0){
        var clickedElementindex = activePoints[0]["_index"];
        if (href.includes('years/')&&href.includes('months/')&&href.includes('members/')&&href.includes('categories/')){
          location.href = href + "/details/" + ids[clickedElementindex]
        } else if (href.includes('years/')&&href.includes('months/')&&href.includes('members/')){
          location.href = href + "/categories/" + ids[clickedElementindex]
        } else if(href.includes('years')&&href.includes('months')&&href.includes('members')){
          location.href = "/years/" + month[0] + "/months/" + month[1] + "/members/" + ids[clickedElementindex]
        } else if(href.includes('years')&&href.includes('months')&&href.includes('categories2')&&href.includes('details2')){
          location.href = "/years/" + month[0] + "/months/" + month[1] + "/members/" + ids[clickedElementindex] + "/categories/" + $('.category').val()
        } else { //root
          location.href = href + "years/" + month[0] + "/months/" + month[1] + "/categories2/" + ids[clickedElementindex] + "/details2"
        }
      }
    }
  }
  if (!location.href.includes('/details/')){
    var howmuch = gon.howmuch
    var howmuches = gon.howmuches
    buildPieChart(howmuch, howmuches)
  }
})