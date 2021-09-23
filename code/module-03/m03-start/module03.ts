/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */
    
interface Loan {
        principal: number,
        interestRate: number    //* Interest rate percentage (eg. 14 is 14%)
}

/*  TODO: Declare the ConventionalLoan interface. */
interface ConventionalLoan extends Loan {
    months: number      //* Total number of months
}


/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest: number = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment: number;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(principle, interestRate, months) {
    // Calculates the monthly payment of a conventional loan
    let interest = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = principle * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment(30000, 5);
let conventionalPayment = calculateConventionalLoanPayment(30000, 5, 180);

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24" 
