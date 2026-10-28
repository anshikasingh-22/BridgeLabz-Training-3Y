
"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        return this.salary + (this.salary * percent / 100);
    }
}

const employees = [
    new Employee(1, "Amit", "IT", 40000),
    new Employee(2, "Sara", "HR", 35000),
    new Employee(3, "Kiran", "Sales", 30000),
    new Employee(4, "Ravi", "IT", 45000),
    new Employee(5, "Neha", "Finance", 50000)
];

employees.forEach(employee => {
    console.log(employee.name);
    console.log("Annual Salary:", employee.getAnnualSalary());
    console.log("Salary with 10% bonus:", employee.applyBonus(10));
});

const totalPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(), 0
);

console.log("Total Annual Payout:", totalPayout);
