function payOff() {


  var firstInitial = document.getElementById("firstInitial").value;
  var firstInterest = document.getElementById("firstInterest").value;
  var firstPayment = document.getElementById("firstPayment").value;
  var secondInitial = document.getElementById("secondInitial").value;
  var secondInterest = document.getElementById("secondInterest").value;
  var secondPayment = document.getElementById("secondPayment").value;
  var thirdInitial = document.getElementById("thirdInitial").value;
  var thirdInterest = document.getElementById("thirdInterest").value;
  var thirdPayment = document.getElementById("thirdPayment").value;

  var firstPayOff = numberOfPayments(firstInitial, firstPayment, firstInterest);
  console.log('firstPayOff: ', firstPayOff);
  var secondRemaining = remaining(secondInitial, secondPayment, secondInterest, firstPayOff);
  document.getElementById("payOff").innerHTML = secondRemaining;
}

function numberOfPayments(p,a,i) {
   return -Math.log(1-(i/1200)*p/a)/Math.log(1+(i/1200));
}

function remaining(p,a,i,n){
  console.log('p,a,i,n: ', p,a,i,n);
  console.log('first: ', p*(1+(i/1200))^n);
  console.log('second: ', (a/(i/1200))*((1+(i/1200))^n-1));
  console.log('small 2nd: ', ((1+(i/1200))^n-1));

  return p*(1+(i/1200))^n-(a/(i/1200))*((1+(i/1200))^n-1);
}
