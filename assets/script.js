var getCurrency = function () {
    // format the github api url
    var apiUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

    // make a request to the url
    fetch(apiUrl).then(function (response) {
      response.json().then(function (data) {
        console.log(data);
      });
    });
  };

  getCurrency();

// var getCurrency = function (Currency1, Currency2) {
//   // format the github api url
//   var apiUrl = `"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${Currency1}/${Currency2}.json"`;

//   // make a request to the url
//   fetch(apiUrl).then(function (response) {
//     response.json().then(function (data) {
//       console.log(data, Currency1, Currency2);
//     });
//   });
// };

// getCurrency();

