var principalAmount = 500000;
var annualInterestPercentage = 10;
var durationInYears = 30;
//Declaration and initialisation of the required intputs: the principal amount, interest rate, and duration of the loan.
//The values here are just for example.
var monthlyPaymentAmount;
//Declaration of the output of the function: The monthly repayment amount.

monthlyPaymentAmount = monthlyPaymentFunction(principalAmount, annualInterestPercentage, durationInYears);
//The repayment amount is calculated by performing the function on the 3 input variables.

function monthlyPaymentFunction(p, i, d){
     //The function definition begins here.
    if((i==0) || (d==0)){
        return "An error has occured - check input.";
        //Handling of exceptions.
    } //End of if.
   else{
    var iM = i / 100 / 12;
    //Divide the interest rate by 100 to convert from percentage to decimal for the calculation.
    //Divide by 12 to obtain the monthly interest instead of yearly.
    var dM = d * 12;
    //Multiply the duration(years) by 12(months) to obtain the number of payment periods.
    var amount = p * iM * (Math.pow(1 + iM, dM)) / (Math.pow(1 + iM, dM) - 1);
    //Performing the required calculation and assigning the result to variable amount.
    return "$" + Math.round(amount * 100) / 100;
   } //End of else. Returning the result rounded to 2 decimal places.
} //End of the function.

var w = "For a mortgage with a principal amount of $";
var x = " and an annual interest rate of ";
var y = "% over ";
var z = " years, the monthly repayment amount is calculated to be: ";
//Declaration and initialisation of various strings to be used in the console output.

console.log(w + principalAmount + x + annualInterestPercentage + y + durationInYears + z + monthlyPaymentAmount);
//A statement about the calculated repayment amount is displayed via the console.

