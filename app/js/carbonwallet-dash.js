$(document).ready(function() {
  setInterval(updateDashboard, (10 * 1000));
  
  function updateDashboard() {
    $.ajax({
        url: "https://blockchain.info/q/24hrprice?cors=true",
        type: "GET",
        context: this,
        error: function () {},
        dataType: 'text',
        success : function (response) {
            $('#btc-price').text(response);
        }
    });
  }
});