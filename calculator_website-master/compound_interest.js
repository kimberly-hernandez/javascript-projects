//compound_interest calculator
let enterButton = document.querySelector("#enterButton");
let newBalanceSpan = document.querySelector("#newBalance");



enterButton.addEventListener("click", function(event){
    let depositAmount = numDeposit.value;
    let years = numYear.value;
    let compoundInterest  = depositAmount * (Math.pow((1 + (.08 / 12)), (12 * years)));

    newBalanceSpan.innerHTML =(Math.floor(compoundInterest * 100)/ 100);
});

//rent percentage calculator

let enterButton1 = document.querySelector("#enterButton1");
let rentPercentageSpan = document.querySelector("#rentPercentage");
let appropriateSpan = document.querySelector("#appropriate");


enterButton1.addEventListener("click", function(event){
    let monthlyIncomeJS = monthlyIncome.value;
    let rentAmountJS = rentAmount.value;
    let rentPercentageAmount = (Math.round((rentAmountJS / monthlyIncomeJS) *100));
    var str = "craigslist";
    var craigslist = str.link("https://www.craigslist.com");


  rentPercentageSpan.innerHTML = rentPercentageAmount;


  if(rentPercentageAmount < 35){
    appropriateSpan.innerHTML = "Congrats! You're within budget. Typically financial experts recommend that you spend \
    no more than 30% of your budget on rent. ";
  }
  else  {
    appropriateSpan.innerHTML = "Whoops! Overbudget. Experts recommend spending no more than 30% of your budget on rent. \
    Maybe try looking for a cheaper place on " + craigslist + "?";
  }
});

