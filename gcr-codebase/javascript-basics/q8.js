let currentSalary = 30000;
let annualIncrementRate = 10;
let salary = currentSalary;

let salaryDetails = [];

for (let year = 1; year <= 5; year++) {
    salary += (salary * annualIncrementRate) / 100;
    salary = Math.round(salary);

    salaryDetails.push({
        Year: year,
        Salary: salary
    });
}

console.table(salaryDetails);