var WALLET = new function ()
{
  this.keys = [];
  
  // Methods
  this.textToBytes = function(text) {
    return Crypto.SHA256(text, { asBytes: true });
  };
  
  this.getKeys = function() {
    return this.keys;
  };
  
  this.updateAllBalances = function() {
    
    var addresses = [];
    
    for(i = 0; i < this.getKeys().length; i++)
    {
      addresses[i] = this.getKeys()[i].getBitcoinAddress().toString();
    }
		
    BLOCKCHAIN.retrieveAllBalances(addresses, function(json) {
			obj = JSON.parse(json);
			for(i = 0; i < obj["data"].length; i++) {
				var bal = obj["data"][i]["balance"];
        $('#balance' + i).text(bal);  
			}
    }); 
  };
	
}
