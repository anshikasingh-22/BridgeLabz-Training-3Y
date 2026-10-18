let bonus = 5000;

function calculateSalary(isPermanent) {
    let salary = 40000;
    let totalSalary = salary;

    if (isPermanent) {
        totalSalary += bonus;
    }

    console.log(`Total Salary: ₹${totalSalary}`);
}

calculateSalary(true);
calculateSalary(false);