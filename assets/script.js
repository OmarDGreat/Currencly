const currencyEl_one = $('#currency1');
const currencyEl_two = $('#currency2');
const amountEL_one = $('#amount1');
const amountEL_two = $('#amount2');

const rateEl = $('#rate');
const swap = $('#swap');
const countryEl = $('#country');


// fetch currency rates and update the DOM
function calculate() {

  const currency_one = currencyEl_one.val();
  const currency_two = currencyEl_two.val();

  fetch(`https://api.exchangerate.host/latest?base=${currency_one}`)
  
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const rate = data.rates[currency_two];
      const amount = amountEL_one.val() * rate;
      rateEl.html(`${amount1.value} ${currency_one} = ${amount} ${currency_two}`);

      amountEL_two.val(amount.toFixed(2));
    });
}

  currencyEl_one.on('change', calculate);
  currencyEl_two.on('change', calculate);
  amountEL_one.on('input', calculate);
  amountEL_two.on('input', calculate);

  
  // fetch country summary from wikipedia and update the DOM
  function getCountrySummary(country) {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&exintro=&explaintext=&titles=Europe`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const summary = data.query.pages.extract;
        console.log(summary);
        // $('#country-summary').html(summary);
      });
  }


  


calculate();
getCountrySummary();







 // save to local storage button
  // $('#save').on('click', () => {
  //   const currency_one = currencyEl_one.val();
  //   const currency_two = currencyEl_two.val();
  //   const amount_one = amountEL_one.val();
  //   const amount_two = amountEL_two.val();

  //   localStorage.setItem('currency_one', currency_one);
  //   localStorage.setItem('currency_two', currency_two);
  //   localStorage.setItem('amount_one', amount_one);
  //   localStorage.setItem('amount_two', amount_two);

  //   console.log(localStorage);
  // }


  // //swap currencies
  // swap.on('click', () => {
  //   const temp = currencyEl_one.val();
  //   currencyEl_one.val(currencyEl_two.val());
  //   currencyEl_two.val(temp);