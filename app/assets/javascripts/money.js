document.addEventListener("turbolinks:load", function() {
  
  history.replaceState(null, document.getElementsByTagName('title')[0].innerHTML, null);
  window.addEventListener('popstate', function(e) {
    window.location.reload();
  });
  
  

  // urlを取得
  href = location.href


  // 配列を定義　名前と金額をぶちこんで行く
  const labels = [];
  const data   = [];


  // detailを表示
  if (href.includes('details')){

    i = 1
    while (i <= gon.howmuch.length + 1){
      let result = gon.howmuch.filter(function(value){
        return value.detail_id == i
      })
      total = 0
      result.map(x => x).forEach(function(x){
        labels.push(x.name);
        data.push(x.money)
      })
      console.log(total)
      console.log(result)
      i += 1
    }
    
    // 円グラフ//////////////////////////
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          backgroundColor: [
            "#f1c40f",
            "#95a5a6",
            "#3498db",
            "#9b59b6",
            "#e74c3c",
            "#2ecc71",
            "#34495e",
          ],
          data: data,
        }]
      }
    })
    // 円グラフ//////////////////////////
    
    
    
  } else if (href.includes('categories')){
    // 配列を定義　名前と金額をぶちこんで行く
    i = 1

    gon.howmuch.forEach(function(e){
      labels.push(e.name);
    })
    while (i <= gon.howmuches.length + 1){
      let result = gon.howmuches.filter(function(value){
        return value.detail_id == i
      })
      total = 0
      result.map(x => x).forEach(function(x){
        total += x.money
      })
      
      data.push(total)
      console.log(gon.howmuches)
      console.log(result)
      i += 1
    }
    

    // 円グラフ//////////////////////////
    var ctx = document.getElementById("myChart").getContext('2d');
    
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          backgroundColor: [
            "#f1c40f",
            "#95a5a6",
            "#3498db",
            "#9b59b6",
            "#e74c3c",
            "#2ecc71",
            "#34495e",
          ],
          data: data,
        }]
      }
    })
    // 円グラフ//////////////////////////

  } else {
    // 配列を定義　名前と金額をぶちこんで行く
    i = 1
    console.log(gon.howmuches)
    gon.howmuches.forEach(function(e){
      labels.push(e.name);
    })
    while (i <= gon.howmuches.length + 1){
      let result = gon.howmuches.filter(function(value){
        return value.detail_id == i
      })
      total = 0
      result.map(x => x).forEach(function(x){
        // console.log(x)
        total += x.money
      })
      
      data.push(total)
      // console.log(result)
      i += 1
    }
    

    // 円グラフ//////////////////////////
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          backgroundColor: [
            "#f1c40f",
            "#95a5a6",
            "#3498db",
            "#9b59b6",
            "#e74c3c",
            "#2ecc71",
            "#34495e",
          ],
          data: data,
        }]
      }
    })
    // 円グラフ//////////////////////////

  }
})