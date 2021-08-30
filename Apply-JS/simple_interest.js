// A = P (1 + rt)

//  A=final amount
//  P	=	initial principal balance
// r	=	annual interest rate
// t	=	time (in years)

function simplInterest(balance, interest, time) {
  var amount = balance * (1 + interest * time);
  return amount;
}

var checkInterest = simplInterest(500, 5, 4);
console.log(checkInterest);
