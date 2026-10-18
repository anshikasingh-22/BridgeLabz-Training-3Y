let userName = "Anshika";
let age = 20;
let isStudent = true;
let subjects = ["JavaScript", "Java", "Python"];
let student = { name: "Anshika", section: "33B" };
let middleName = null;
let address;

let data = [
    { label: "Name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Is Student", value: isStudent, type: typeof isStudent },
    { label: "Subjects", value: subjects, type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "Student Object", value: student, type: typeof student },
    { label: "Middle Name", value: middleName, type: "null" },
    { label: "Address", value: address, type: typeof address }
];

console.table(data);