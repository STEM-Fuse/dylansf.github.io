d3.json("https://api.coindesk.com/v1/bpi/currentprice.json", function(data) {
    console.log(data[0]);
  });

