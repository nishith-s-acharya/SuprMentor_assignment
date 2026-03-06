// ============================================
// DATA DOCTOR — DATASET CLEANING OPERATIONS
// ============================================
// Assignment  : Data Doctor
// Description : Clean a dataset by handling missing values,
//               removing duplicates, standardizing text, and
//               explain why cleaning matters.
// Date        : 26/02/2026
// ============================================

// ============================================
// RAW DATASET (Dirty / Uncleaned)
// ============================================

let rawDataset = [
    { id: 1, name: "alice johnson", age: 28, email: "alice@example.com", city: "new york" },
    { id: 2, name: "BOB SMITH", age: null, email: "bob@example.com", city: "LOS ANGELES" },
    { id: 3, name: "  Charlie Brown", age: 35, email: "", city: "chicago" },
    { id: 4, name: "alice johnson", age: 28, email: "alice@example.com", city: "new york" }, // duplicate
    { id: 5, name: "diana prince", age: undefined, email: "diana@example.com", city: "  Houston  " },
    { id: 6, name: "", age: 40, email: "frank@example.com", city: "phoenix" }, // missing name
    { id: 7, name: "EVE ADAMS", age: 22, email: "eve@example.com", city: "PHILADELPHIA" },
    { id: 8, name: "frank castle", age: -5, email: "frank@example.com", city: "san antonio" }, // invalid age
    { id: 9, name: "BOB SMITH", age: null, email: "bob@example.com", city: "LOS ANGELES" }, // duplicate
    { id: 10, name: "grace hopper", age: 55, email: "graceexample.com", city: "san diego" }, // invalid email
    { id: 11, name: "  henry ford  ", age: 60, email: "henry@example.com", city: "dallas" },
    { id: 12, name: "iris west", age: 30, email: null, city: null }, // multiple nulls
];

console.log("");
console.log("============================================");
console.log("        DATA DOCTOR — DATASET CLEANER      ");
console.log("============================================");

// ============================================
// DISPLAY HELPER
// ============================================

function printDataset(label, dataset) {
    console.log("");
    console.log("--------------------------------------------");
    console.log(" " + label + " [Total Records : " + dataset.length + "]");
    console.log("--------------------------------------------");
    dataset.forEach(function (record, index) {
        console.log(
            "  [" + (index + 1) + "] " +
            "ID:" + record.id + " | " +
            "Name:" + record.name + " | " +
            "Age:" + record.age + " | " +
            "Email:" + record.email + " | " +
            "City:" + record.city
        );
    });
}

// ============================================
// STEP 1 — DISPLAY RAW (DIRTY) DATASET
// ============================================

printDataset("RAW DIRTY DATASET", rawDataset);

// ============================================
// STEP 2 — HANDLE MISSING VALUES
// ============================================
// Rules:
//   - null / undefined / empty string name  → "Unknown"
//   - null / undefined age                  → 0
//   - null / undefined / empty string email → "no-email@unknown.com"
//   - null / undefined / empty string city  → "Unknown City"

console.log("");
console.log("============================================");
console.log("  STEP 1 : HANDLING MISSING VALUES         ");
console.log("============================================");

let afterMissingFix = rawDataset.map(function (record) {
    return {
        id: record.id,
        name: (record.name === null || record.name === undefined || record.name.trim() === "") ? "Unknown" : record.name,
        age: (record.age === null || record.age === undefined) ? 0 : record.age,
        email: (record.email === null || record.email === undefined || record.email.trim() === "") ? "no-email@unknown.com" : record.email,
        city: (record.city === null || record.city === undefined || record.city.trim() === "") ? "Unknown City" : record.city,
    };
});

console.log("✔ Missing values replaced with default values.");
console.log("  → Name  : null/empty → 'Unknown'");
console.log("  → Age   : null       → 0");
console.log("  → Email : null/empty → 'no-email@unknown.com'");
console.log("  → City  : null/empty → 'Unknown City'");

printDataset("AFTER HANDLING MISSING VALUES", afterMissingFix);

// ============================================
// STEP 3 — REMOVE DUPLICATES
// ============================================
// A record is a duplicate if name + email combination already exists.

console.log("");
console.log("============================================");
console.log("  STEP 2 : REMOVING DUPLICATES             ");
console.log("============================================");

let seenKeys = [];
let removedDuplicates = [];

let afterDuplicateRemoval = afterMissingFix.filter(function (record) {
    let key = record.name.toLowerCase() + "|" + record.email.toLowerCase();
    if (seenKeys.indexOf(key) !== -1) {
        removedDuplicates.push(record);
        return false;
    }
    seenKeys.push(key);
    return true;
});

console.log("✔ Duplicates removed based on Name + Email combination.");
console.log("  → Total duplicates found and removed : " + removedDuplicates.length);
removedDuplicates.forEach(function (dup) {
    console.log("    Removed → ID:" + dup.id + " | Name:" + dup.name + " | Email:" + dup.email);
});

printDataset("AFTER REMOVING DUPLICATES", afterDuplicateRemoval);

// ============================================
// STEP 4 — STANDARDIZE TEXT
// ============================================
// Rules:
//   - name  → Proper Case (First letter of each word capitalized)
//   - email → all lowercase
//   - city  → Proper Case + trimmed

function toProperCase(str) {
    return str
        .trim()
        .toLowerCase()
        .split(" ")
        .filter(function (word) { return word.length > 0; })
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join(" ");
}

console.log("");
console.log("============================================");
console.log("  STEP 3 : STANDARDIZING TEXT              ");
console.log("============================================");

let afterTextStandardize = afterDuplicateRemoval.map(function (record) {
    return {
        id: record.id,
        name: toProperCase(record.name),
        age: record.age,
        email: record.email.trim().toLowerCase(),
        city: toProperCase(record.city),
    };
});

console.log("✔ Text standardization applied.");
console.log("  → Name  : Converted to Proper Case & trimmed");
console.log("  → Email : Converted to lowercase & trimmed");
console.log("  → City  : Converted to Proper Case & trimmed");

printDataset("AFTER TEXT STANDARDIZATION", afterTextStandardize);

// ============================================
// STEP 5 — VALIDATE DATA (Invalid values)
// ============================================
// Rules:
//   - age < 0 or age > 120  → flag as invalid, reset to 0
//   - email must contain '@' → flag as invalid, reset to default

console.log("");
console.log("============================================");
console.log("  STEP 4 : VALIDATING DATA                 ");
console.log("============================================");

let invalidRecords = [];

let afterValidation = afterTextStandardize.map(function (record) {
    let issues = [];
    let cleaned = Object.assign({}, record);

    // Validate Age
    if (typeof cleaned.age !== "number" || cleaned.age < 0 || cleaned.age > 120) {
        issues.push("Invalid age (" + cleaned.age + ") → reset to 0");
        cleaned.age = 0;
    }

    // Validate Email
    if (cleaned.email.indexOf("@") === -1) {
        issues.push("Invalid email (" + cleaned.email + ") → reset to 'no-email@unknown.com'");
        cleaned.email = "no-email@unknown.com";
    }

    if (issues.length > 0) {
        invalidRecords.push({ id: record.id, name: record.name, issues: issues });
    }

    return cleaned;
});

console.log("✔ Data validation complete.");
if (invalidRecords.length === 0) {
    console.log("  → No invalid records found.");
} else {
    console.log("  → Total invalid records corrected : " + invalidRecords.length);
    invalidRecords.forEach(function (rec) {
        console.log("    Record ID:" + rec.id + " (" + rec.name + ")");
        rec.issues.forEach(function (issue) {
            console.log("      └─ " + issue);
        });
    });
}

printDataset("AFTER VALIDATION & CORRECTION", afterValidation);

// ============================================
// STEP 6 — FINAL CLEANED DATASET
// ============================================

console.log("");
console.log("============================================");
console.log("   FINAL CLEANED DATASET                   ");
console.log("============================================");

let cleanDataset = afterValidation;

printDataset("CLEAN DATASET", cleanDataset);

// ============================================
// STEP 7 — CLEANING SUMMARY REPORT
// ============================================

console.log("");
console.log("============================================");
console.log("   CLEANING SUMMARY REPORT                 ");
console.log("============================================");
console.log("  Original Records         : " + rawDataset.length);
console.log("  Records After Cleaning   : " + cleanDataset.length);
console.log("  Duplicates Removed       : " + removedDuplicates.length);
console.log("  Invalid Records Fixed    : " + invalidRecords.length);
console.log("  Net Records Removed      : " + (rawDataset.length - cleanDataset.length));

// ============================================
// STEP 8 — WHY DATA CLEANING MATTERS
// ============================================

console.log("");
console.log("============================================");
console.log("   WHY DATA CLEANING MATTERS               ");
console.log("============================================");
console.log("");
console.log("  1. ACCURACY");
console.log("     → Dirty data leads to wrong results and conclusions.");
console.log("     → Clean data ensures trustworthy analysis and reports.");
console.log("");
console.log("  2. CONSISTENCY");
console.log("     → Inconsistent formats (e.g. 'NEW YORK' vs 'new york')");
console.log("       cause mismatches during grouping or filtering.");
console.log("     → Standardization makes data uniform and comparable.");
console.log("");
console.log("  3. COMPLETENESS");
console.log("     → Missing values (null/undefined) can crash programs");
console.log("       or produce incorrect calculations.");
console.log("     → Filling or flagging missing data prevents errors.");
console.log("");
console.log("  4. UNIQUENESS");
console.log("     → Duplicate records inflate counts, totals, or averages.");
console.log("     → Removing duplicates ensures each entry is unique.");
console.log("");
console.log("  5. VALIDITY");
console.log("     → Invalid values like negative ages or broken email");
console.log("       addresses corrupt the dataset.");
console.log("     → Validation rules catch and correct bad data early.");
console.log("");
console.log("  6. BETTER DECISION MAKING");
console.log("     → Businesses rely on data to make decisions.");
console.log("     → Clean data = reliable insights = smarter decisions.");
console.log("");
console.log("  7. PERFORMANCE");
console.log("     → Smaller, cleaner datasets are faster to process,");
console.log("       query, and analyze.");
console.log("");
console.log("  CONCLUSION:");
console.log("  → 'Garbage In, Garbage Out' — If the input data is bad,");
console.log("    the output will always be bad, no matter how good");
console.log("    the algorithm or system is.");
console.log("  → Data cleaning is the FIRST and MOST IMPORTANT step");
console.log("    in any data processing pipeline.");

console.log("");
console.log("============================================");
console.log("   DATA DOCTOR — ALL OPERATIONS COMPLETED  ");
console.log("============================================");
