// Function to calculate an individual's net salary
function calculateIndividualSalary(baseSalary, extraBenefits) {
    // I am declaring the following constants for tax rates and deductions
    const TAX_RATE = 0.3; // Payee tax rate
    const NHIF_DEDUCTION = 500; // NHIF deductions
    const NSSF_DEDUCTION = 200; // NSSF deductions
  
    // This calculates the gross salary by adding basic salary and benefits
    let grossSalary = baseSalary + extraBenefits;
  
    // This calculates the payee (tax) based on the gross salary
    let payee = grossSalary * TAX_RATE;
  
    // This calculates the net salary by subtracting payee, NHIF, and NSSF deductions from the gross salary
    let netSalary = grossSalary - payee - NHIF_DEDUCTION - NSSF_DEDUCTION;
  
    // This Return method will return the details containing all the calculated values
    return {
        grossSalary: grossSalary, // Gross salary before deductions
        payee: payee, // Payee (tax) deducted from the gross salary
        NHIFDeductions: NHIF_DEDUCTION, // NHIF deductions
        NSSFDeductions: NSSF_DEDUCTION, // NSSF deductions
        netSalary: netSalary // Net salary after deductions
    };
  }
  
  // Calculates the inputed details to calculate their values
  let baseSalary = 50000; 
  let extraBenefits = 10000; 
  let salaryDetails = calculateIndividualSalary(baseSalary, extraBenefits); // Calculate salary details
  // This outputs the calculated values
  console.log("Gross Salary: " + salaryDetails.grossSalary);
  console.log("Payee (Tax): " + salaryDetails.payee);
  console.log("NHIF Deductions: " + salaryDetails.NHIFDeductions);
  console.log("NSSF Deductions: " + salaryDetails.NSSFDeductions);
  console.log("Net Salary: " + salaryDetails.netSalary);