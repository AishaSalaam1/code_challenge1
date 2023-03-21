// Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 
// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

// Define a function called studentMarks that takes a single paramater called marks
function studentMarks(value){
  
  if (value > 79 && value <= 100) {
    // if marks are equal to 79 or greater than 79, assign the grade of A and return it .
   return "A"
  
  }
  
  else if (value >= 60 && value <= 79) {
    // if marks are between 60 and 79, assign the grade of B and return it .
  return "B"
  } else if (value >= 49 && value <= 59) {
    //  if marks are between 49 and 59, assign the grade of C and return it .
   return "C"
  } else if (value >= 40 && value <= 49) {
    // / if marks are between 40 and 49, assign the grade of D and return it .
   return "D"
  } else if (value < 40 && value > 0) {
     //  if marks is less than 40, assign the grade of E and return it ., assign the grade of A and return it 
    return "E"
  
  } else {
    // if marks are invalid please provide correct input
    return "Please provide correct input";
  }
 }
//  print the result to the console
console.log('you got ' + studentMarks(80) );
console.log('you got ' + studentMarks(45) );
studentMarks(value);



let speed = 80
function checkSpeed(speed){

  let a = 5
  let speedLimit = 70

  if(speed < 70 ){
    console.log('OK')
  }

  else{
    let points = Math.floor((speed - speedLimit)/5)
  
  if(points > 12){
  console.log("License suspended")
  }
  else(
    console.log(`points: ${points}`)
  )
  }
  }
  checkSpeed(speed);




// Challenge 3: Net Salary Calculator (Toy Problem) now
// Write a program whose major task is to calculate an individual’s Net Salary now
// by getting the inputs of basic salary and benefits.  Now
// Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.  Now
// This function  takes in the basic salary of the individual now
function netSalary(basicSalary, benefits){
    // Prompting the user to input their basic salary 
    basicSalary = prompt("Please enter your basic salary:");
    // Prompting the user to input their benefits 
    benefits = prompt("Enter your montly benefits:");
    // the gross pay 
    grossPay = Number(basicSalary) + Number(benefits);
    // percentage of  pension contribution 
    let pensionContributionPercentage = 0.06;
    // Deduction taken by the NHIF 
    let nhifDeduction;
    // deduction taken by the NSSF 
    let nssfDeduction = Math.round(pensionContributionPercentage * grossPay);
    // limit of pensionable pay for the first tier contribution to the NSSF 
    let firstnssfDeductionTierMax = 6000;
    // limit of pensionable pay for the second tier  contribution to the NSSF 
    let secondnssfDeductionTierMax = 18000;
    // Payee(ie.tax) 
    let payee;
    // the final net salary after all deductions 
    let finalnetSalary;
    if(grossPay<= 5999){
        nhifDeduction = 150;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }else if(grossPay >=6000 && grossPay<= 7999){
        nhifDeduction = 300;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }else if(grossPay >=8000 && grossPay <=11999){
        nhifDeduction =400;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }else if (grossPay >=12,000 && grossPay<= 14999){
        nhifDeduction =500;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }else if(grossPay >= 15000 && grossPay<= 19999){
        nhifDeduction =600;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }else if(grossPay >=20000 && grossPay<= 24999){
        nhifDeduction=750;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }else if (grossPay >=30000 && grossPay<= 34999){
        nhifDeduction=900;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }else if(grossPay >=35000 && grossPay<= 39999){
        nhifDeduction=950;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }else if(grossPay >=40000 && grossPay<= 44999){
        nhifDeduction=1000;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }else if (grossPay >=45000 && grossPay<= 49999){
        nhifDeduction=1100;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }else if(grossPay>=50000 && grossPay<= 59999){
        nhifDeduction=1200;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }else if(grossPay>=60000 && grossPay<= 69999){
        nhifDeduction=1300;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }else if(grossPay>=70000 && grossPay<= 79999){
        nhifDeduction=1400;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }else if(grossPay>=80000 && grossPay<= 89999){
        nhifDeduction=1500;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }else if(grossPay>=90000 && grossPay<= 99999){
        nhifDeduction=1600;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }else if(grossPay>=100000 ){
        nhifDeduction=1700;
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
    }
    // calculating all nssf deductions 
    if (nssfDeduction > 0 && nssfDeduction < firstnssfDeductionTierMax) {
        payeTaxableIncome = grossPay - nhifDeduction - nssfDeduction
        console.log(`Your NSSF Deduction is first tier of amount :${nssfDeduction}`)
      } else if (nssfDeduction > firstnssfDeductionTierMax && nssfDeduction <= secondnssfDeductionTierMax) {
        payeTaxableIncome = grossPay- nhifDeduction - nssfDeduction
        console.log(`Your NSSF Deduction is second tier of amount :${nssfDeduction}`)
      } else if (nssfDeduction > secondnssfDeductionTierMax) {
        payeTaxableIncome = grossPay- nhifDeduction - secondnssfDeductionTierMax
        console.log(`Your NSSF Deduction is second tier of amount :${secondnssfDeductionTierMax}`)
      }
      //calculating the  payee (i.e. Tax)
      if (payeTaxableIncome > 0 && payeTaxableIncome <= 24000) {
        tax = 0.1;
        payee = Math.round(tax * payeTaxableIncome);
        finalnetSalary = payeTaxableIncome - payee;
        console.log(`Your payee is :${payee}`);
        console.log(`Your Gross Salary is :${grossPay}`);
        console.log(`Your Net Salary is :${finalnetSalary}`);
      } else if (payeTaxableIncome > 24000 && payeTaxableIncome <= 32333) {
        tax = 0.25;
        payee= Math.round(tax * payeTaxableIncome);
        finalnetSalary = payeTaxableIncome - payee;
        console.log(`Your payee is ${payee}`);
        console.log(`Your Gross Salary is ${grossPay}`);
        console.log(`Your Net Salary is ${finalnetSalary}`);
      } else if (payeTaxableIncome > 32333) {
        tax = 0.3;
        payee = Math.round(tax * payeTaxableIncome);
        finalnetSalary = payeTaxableIncome - payee
        console.log(`Your payee is ${payee}`)
        console.log(`Your Gross Salary is ${grossPay}`)
        console.log(`Your Net Salary is ${finalnetSalary}`)
      }
}
netSalary(basicSalary, benefits);