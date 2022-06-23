function displayWelcome() {
  console.log(
    "This program will determine the time to pay off a credit card and the interest paid based on the current balance, the interest rate, and the monthly payments made"
  );
  console.log("\nBalance on your credit card:1500");
  console.log("\nInterest Rate:18");
  console.log("\nAssuming a minimum payment of 2% of the balance ($30 min)");
  console.log("\nYour minimum payment would be $30.00");
  console.log("\nPAYOFF SCHEDULE");
  console.log("\n______________");
  console.log("\nYear\t Balance\t Payment Id\t Interest Paid\n");
}
function calculateMinimumPayment(balance, interestRate) {
  return balance * interestRate;
}

function processPaymentSchedule(balance, monthlyInterestRate, minimumPayment) {
  let currentMonth = 0;
  let remainingBalance = balance;

  let totalInterestPaid = 0;

  let id = 1;
  function generatePaymentId() {
    return id++;
  }

  const monthlyPayment = calculateMinimumPayment(
    remainingBalance,
    minimumPayment
  );

  while (remainingBalance > 0) {
    const interest = remainingBalance * (monthlyInterestRate / 12);

    totalInterestPaid += interest;

    if (remainingBalance < monthlyPayment) {
      remainingBalance = 0;
    } else {
      remainingBalance += interest - monthlyPayment;
    }

    displayPayment({
      year: Math.floor(currentMonth++ / 12) + 1,
      balance: remainingBalance,
      paymentId: generatePaymentId(),
      interestPaid: totalInterestPaid,
    });
  }
}

function displayPayment({ year, balance, paymentId, interestPaid }) {
  console.log(
    `${year}\t${balance.toFixed(2)}\t${paymentId}\t${interestPaid.toFixed(2)}\n`
  );
}
displayWelcome();
processPaymentSchedule(1500, 0.18, 0.02);
