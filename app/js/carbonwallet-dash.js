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
            $('#btc-price').text('$' + response);
    
            var balance = WALLET.getBalance();
            $('#btc-balance').text(formatBTC(balance));
            
            balance = balance * parseFloat(response);
            $('#dollar-balance').text('$' + balance.toFixed(2));
        }
    });
    
  }
  
  function formatBTC(btc) {
    if(btc < 0.001)
      return btc.toFixed(5);
    return btc.toFixed(3);
  }
});