document.addEventListener("turbolinks:load", function() {

  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["服", "髪", "靴", "T", "F", "S", "S"],
      datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6",
          "#f1c40f",
          "#e74c3c",
          "#34495e"
        ],
        data: [gon.fashon, 5000, 10000, gon.fashon, gon.hair, 24, 7]
      }]
    }
})
})