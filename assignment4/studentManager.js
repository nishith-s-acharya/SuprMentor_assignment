// ============================================
// STUDENT MANAGER — ARRAYS & OBJECTS
// ============================================
// Assignment  : Student Manager
// Description : Use arrays & objects to store student marks
//               and calculate averages.
// Date        : 28/02/2026
// ============================================

// ============================================
// STUDENT DATASET — Array of Objects
// ============================================

let students = [
    {
        id: 1,
        name: "Alice Johnson",
        marks: {
            mathematics: 88,
            science: 92,
            english: 76,
            history: 85,
            computerSci: 95,
        },
    },
    {
        id: 2,
        name: "Bob Smith",
        marks: {
            mathematics: 72,
            science: 65,
            english: 80,
            history: 70,
            computerSci: 78,
        },
    },
    {
        id: 3,
        name: "Charlie Brown",
        marks: {
            mathematics: 55,
            science: 60,
            english: 50,
            history: 48,
            computerSci: 62,
        },
    },
    {
        id: 4,
        name: "Diana Prince",
        marks: {
            mathematics: 95,
            science: 98,
            english: 92,
            history: 97,
            computerSci: 99,
        },
    },
    {
        id: 5,
        name: "Eve Adams",
        marks: {
            mathematics: 40,
            science: 35,
            english: 45,
            history: 38,
            computerSci: 42,
        },
    },
    {
        id: 6,
        name: "Frank Castle",
        marks: {
            mathematics: 68,
            science: 74,
            english: 71,
            history: 66,
            computerSci: 80,
        },
    },
    {
        id: 7,
        name: "Grace Hopper",
        marks: {
            mathematics: 85,
            science: 89,
            english: 83,
            history: 79,
            computerSci: 91,
        },
    },
];

// ============================================
// HELPER : Get All Marks as Array
// ============================================

function getMarksArray(student) {
    return Object.values(student.marks);
}

// ============================================
// OPERATION 1 — CALCULATE AVERAGE
// ============================================

function calculateAverage(student) {
    let marksArray = getMarksArray(student);
    let total = 0;
    for (let i = 0; i < marksArray.length; i++) {
        total += marksArray[i];
    }
    let average = total / marksArray.length;
    return Math.round(average * 100) / 100; // round to 2 decimal places
}

// ============================================
// OPERATION 2 — ASSIGN GRADE
// ============================================

function assignGrade(average) {
    if (average >= 90) return "A+";
    if (average >= 80) return "A";
    if (average >= 70) return "B";
    if (average >= 60) return "C";
    if (average >= 50) return "D";
    return "F";
}

// ============================================
// OPERATION 3 — PASS / FAIL STATUS
// ============================================

function getStatus(average) {
    return average >= 50 ? "PASS" : "FAIL";
}

// ============================================
// OPERATION 4 — HIGHEST MARK IN A SUBJECT
// ============================================

function getHighestMark(student) {
    let subjects = Object.keys(student.marks);
    let highestSubject = subjects[0];
    let highestMark = student.marks[subjects[0]];

    for (let i = 1; i < subjects.length; i++) {
        if (student.marks[subjects[i]] > highestMark) {
            highestMark = student.marks[subjects[i]];
            highestSubject = subjects[i];
        }
    }
    return { subject: highestSubject, mark: highestMark };
}

// ============================================
// OPERATION 5 — LOWEST MARK IN A SUBJECT
// ============================================

function getLowestMark(student) {
    let subjects = Object.keys(student.marks);
    let lowestSubject = subjects[0];
    let lowestMark = student.marks[subjects[0]];

    for (let i = 1; i < subjects.length; i++) {
        if (student.marks[subjects[i]] < lowestMark) {
            lowestMark = student.marks[subjects[i]];
            lowestSubject = subjects[i];
        }
    }
    return { subject: lowestSubject, mark: lowestMark };
}

// ============================================
// OPERATION 6 — TOTAL MARKS
// ============================================

function getTotalMarks(student) {
    let marksArray = getMarksArray(student);
    let total = 0;
    for (let i = 0; i < marksArray.length; i++) {
        total += marksArray[i];
    }
    return total;
}

// ============================================
// DISPLAY — INDIVIDUAL STUDENT REPORT CARD
// ============================================

function printReportCard(student) {
    let average = calculateAverage(student);
    let grade = assignGrade(average);
    let status = getStatus(average);
    let highest = getHighestMark(student);
    let lowest = getLowestMark(student);
    let total = getTotalMarks(student);
    let subjects = Object.keys(student.marks);
    let maxMarks = subjects.length * 100;

    console.log("  ┌─────────────────────────────────────┐");
    console.log("  │  REPORT CARD — " + student.name);
    console.log("  ├─────────────────────────────────────┤");
    subjects.forEach(function (subject) {
        let label = (subject + "           ").slice(0, 14);
        console.log("  │  " + label + " : " + student.marks[subject] + " / 100");
    });
    console.log("  ├─────────────────────────────────────┤");
    console.log("  │  Total          : " + total + " / " + maxMarks);
    console.log("  │  Average        : " + average + " / 100");
    console.log("  │  Grade          : " + grade);
    console.log("  │  Status         : " + status);
    console.log("  │  Best Subject   : " + highest.subject + " (" + highest.mark + ")");
    console.log("  │  Weak Subject   : " + lowest.subject + " (" + lowest.mark + ")");
    console.log("  └─────────────────────────────────────┘");
}

// ============================================
// SECTION 1 — ALL INDIVIDUAL REPORT CARDS
// ============================================

console.log("");
console.log("============================================");
console.log("   STUDENT MANAGER — REPORT CARDS         ");
console.log("============================================");

students.forEach(function (student) {
    console.log("");
    printReportCard(student);
});

// ============================================
// SECTION 2 — CLASS AVERAGE PER SUBJECT
// ============================================

console.log("");
console.log("============================================");
console.log("   CLASS AVERAGE PER SUBJECT              ");
console.log("============================================");

let subjects = Object.keys(students[0].marks);

subjects.forEach(function (subject) {
    let total = 0;
    students.forEach(function (student) {
        total += student.marks[subject];
    });
    let avg = Math.round((total / students.length) * 100) / 100;
    console.log("  " + (subject + "               ").slice(0, 16) + " → Class Avg : " + avg + " / 100");
});

// ============================================
// SECTION 3 — CLASS TOPPER (Highest Average)
// ============================================

console.log("");
console.log("============================================");
console.log("   CLASS TOPPER                           ");
console.log("============================================");

let topper = students[0];
students.forEach(function (student) {
    if (calculateAverage(student) > calculateAverage(topper)) {
        topper = student;
    }
});

console.log("  🏆 Topper  : " + topper.name);
console.log("     Average : " + calculateAverage(topper) + " / 100");
console.log("     Grade   : " + assignGrade(calculateAverage(topper)));

// ============================================
// SECTION 4 — CLASS RANKING (Sorted by Average)
// ============================================

console.log("");
console.log("============================================");
console.log("   CLASS RANKING (High to Low Average)    ");
console.log("============================================");

let ranked = students.slice().sort(function (a, b) {
    return calculateAverage(b) - calculateAverage(a);
});

ranked.forEach(function (student, index) {
    let avg = calculateAverage(student);
    let grade = assignGrade(avg);
    let status = getStatus(avg);
    console.log(
        "  Rank " + (index + 1) + " → " +
        (student.name + "                ").slice(0, 16) +
        " | Avg: " + avg +
        " | Grade: " + grade +
        " | " + status
    );
});

// ============================================
// SECTION 5 — PASS / FAIL SUMMARY
// ============================================

console.log("");
console.log("============================================");
console.log("   PASS / FAIL SUMMARY                    ");
console.log("============================================");

let passed = students.filter(function (s) { return getStatus(calculateAverage(s)) === "PASS"; });
let failed = students.filter(function (s) { return getStatus(calculateAverage(s)) === "FAIL"; });

console.log("  Total Students : " + students.length);
console.log("  Passed         : " + passed.length);
console.log("  Failed         : " + failed.length);

console.log("");
console.log("  ✔ PASSED STUDENTS :");
passed.forEach(function (s) {
    console.log("    → " + s.name + " (Avg: " + calculateAverage(s) + ")");
});

if (failed.length > 0) {
    console.log("");
    console.log("  ✘ FAILED STUDENTS :");
    failed.forEach(function (s) {
        console.log("    → " + s.name + " (Avg: " + calculateAverage(s) + ")");
    });
}

// ============================================
// SECTION 6 — GRADE DISTRIBUTION
// ============================================

console.log("");
console.log("============================================");
console.log("   GRADE DISTRIBUTION                     ");
console.log("============================================");

let gradeDist = { "A+": 0, "A": 0, "B": 0, "C": 0, "D": 0, "F": 0 };

students.forEach(function (student) {
    let grade = assignGrade(calculateAverage(student));
    gradeDist[grade]++;
});

Object.keys(gradeDist).forEach(function (grade) {
    let count = gradeDist[grade];
    let bar = "█".repeat(count);
    console.log("  Grade " + grade + " : " + bar + " (" + count + " student" + (count !== 1 ? "s" : "") + ")");
});

// ============================================
// SECTION 7 — OVERALL CLASS STATISTICS
// ============================================

console.log("");
console.log("============================================");
console.log("   OVERALL CLASS STATISTICS               ");
console.log("============================================");

let allAverages = students.map(function (s) { return calculateAverage(s); });

let classTotal = allAverages.reduce(function (sum, avg) { return sum + avg; }, 0);
let classAvg = Math.round((classTotal / students.length) * 100) / 100;
let classHighest = Math.max.apply(null, allAverages);
let classLowest = Math.min.apply(null, allAverages);

let topStudent = students[allAverages.indexOf(classHighest)];
let bottomStudent = students[allAverages.indexOf(classLowest)];

console.log("  Total Students   : " + students.length);
console.log("  Class Average    : " + classAvg + " / 100");
console.log("  Highest Average  : " + classHighest + " (" + topStudent.name + ")");
console.log("  Lowest Average   : " + classLowest + " (" + bottomStudent.name + ")");
console.log("  Pass Percentage  : " + Math.round((passed.length / students.length) * 100) + "%");

console.log("");
console.log("============================================");
console.log("   STUDENT MANAGER — ALL OPERATIONS DONE  ");
console.log("============================================");
