// ============================================
// INTERACTIVE FORM — VALIDATION SCRIPT
// ============================================
// Assignment  : Interactive Form
// Description : Build a form that validates user input
//               and shows success/error messages.
// Date        : 02/03/2026
// ============================================

// ============================================
// FIELD REFERENCES
// ============================================

const form = document.getElementById("registrationForm");
const successBanner = document.getElementById("successBanner");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const btnLoader = document.getElementById("btnLoader");

const fields = {
    fullName: document.getElementById("fullName"),
    username: document.getElementById("username"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    dob: document.getElementById("dob"),
    gender: document.getElementById("gender"),
    password: document.getElementById("password"),
    confirmPassword: document.getElementById("confirmPassword"),
    website: document.getElementById("website"),
    about: document.getElementById("about"),
    terms: document.getElementById("terms"),
};

// ============================================
// HELPER — SHOW ERROR
// ============================================

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errEl = document.getElementById("error-" + fieldId);
    const group = document.getElementById("group-" + fieldId);

    if (field && field.type !== "checkbox") {
        field.classList.remove("valid");
        field.classList.add("invalid");
    }

    if (errEl) {
        errEl.textContent = "⚠ " + message;
        errEl.classList.add("show");
    }
}

// ============================================
// HELPER — SHOW SUCCESS
// ============================================

function showSuccess(fieldId) {
    const field = document.getElementById(fieldId);
    const errEl = document.getElementById("error-" + fieldId);

    if (field && field.type !== "checkbox") {
        field.classList.remove("invalid");
        field.classList.add("valid");
    }

    if (errEl) {
        errEl.textContent = "";
        errEl.classList.remove("show");
    }
}

// ============================================
// HELPER — CLEAR FIELD STATE
// ============================================

function clearFieldState(fieldId) {
    const field = document.getElementById(fieldId);
    const errEl = document.getElementById("error-" + fieldId);

    if (field) {
        field.classList.remove("valid", "invalid");
    }

    if (errEl) {
        errEl.textContent = "";
        errEl.classList.remove("show");
    }
}

// ============================================
// VALIDATION RULES
// ============================================

// --- Full Name ---
function validateFullName() {
    const value = fields.fullName.value.trim();
    if (value === "") {
        showError("fullName", "Full name is required.");
        return false;
    }
    if (value.length < 3) {
        showError("fullName", "Name must be at least 3 characters.");
        return false;
    }
    if (!/^[a-zA-Z\s'-]+$/.test(value)) {
        showError("fullName", "Name can only contain letters, spaces, hyphens, or apostrophes.");
        return false;
    }
    showSuccess("fullName");
    return true;
}

// --- Username ---
function validateUsername() {
    const value = fields.username.value.trim();
    if (value === "") {
        showError("username", "Username is required.");
        return false;
    }
    if (value.length < 3 || value.length > 20) {
        showError("username", "Username must be 3–20 characters.");
        return false;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        showError("username", "Username can only contain letters, numbers, and underscores.");
        return false;
    }
    showSuccess("username");
    return true;
}

// --- Email ---
function validateEmail() {
    const value = fields.email.value.trim();
    if (value === "") {
        showError("email", "Email address is required.");
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(value)) {
        showError("email", "Please enter a valid email address.");
        return false;
    }
    showSuccess("email");
    return true;
}

// --- Phone ---
function validatePhone() {
    const value = fields.phone.value.trim();
    if (value === "") {
        showError("phone", "Phone number is required.");
        return false;
    }
    const cleaned = value.replace(/[\s\-\(\)]/g, "");
    if (!/^\+?[0-9]{7,15}$/.test(cleaned)) {
        showError("phone", "Enter a valid phone number (7–15 digits).");
        return false;
    }
    showSuccess("phone");
    return true;
}

// --- Date of Birth ---
function validateDob() {
    const value = fields.dob.value;
    if (!value) {
        showError("dob", "Date of birth is required.");
        return false;
    }
    const dob = new Date(value);
    const today = new Date();
    const minDate = new Date();
    minDate.setFullYear(today.getFullYear() - 100);

    today.setHours(0, 0, 0, 0);

    if (dob >= today) {
        showError("dob", "Date of birth must be in the past.");
        return false;
    }
    if (dob < minDate) {
        showError("dob", "Please enter a valid date of birth.");
        return false;
    }

    // Age must be at least 13
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;

    if (age < 13) {
        showError("dob", "You must be at least 13 years old.");
        return false;
    }

    showSuccess("dob");
    return true;
}

// --- Gender ---
function validateGender() {
    const value = fields.gender.value;
    if (!value) {
        showError("gender", "Please select your gender.");
        return false;
    }
    showSuccess("gender");
    return true;
}

// --- Password ---
function validatePassword() {
    const value = fields.password.value;
    if (value === "") {
        showError("password", "Password is required.");
        return false;
    }
    if (value.length < 8) {
        showError("password", "Password must be at least 8 characters.");
        return false;
    }
    if (!/[0-9]/.test(value)) {
        showError("password", "Password must include at least one number.");
        return false;
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)) {
        showError("password", "Password must include at least one special character.");
        return false;
    }
    showSuccess("password");
    return true;
}

// --- Confirm Password ---
function validateConfirmPassword() {
    const value = fields.confirmPassword.value;
    const passVal = fields.password.value;

    if (value === "") {
        showError("confirmPassword", "Please confirm your password.");
        return false;
    }
    if (value !== passVal) {
        showError("confirmPassword", "Passwords do not match.");
        return false;
    }
    showSuccess("confirmPassword");
    return true;
}

// --- Website (Optional) ---
function validateWebsite() {
    const value = fields.website.value.trim();
    if (value === "") {
        showSuccess("website");
        return true; // optional
    }
    try {
        const url = new URL(value);
        if (!["http:", "https:"].includes(url.protocol)) {
            showError("website", "URL must start with http:// or https://");
            return false;
        }
    } catch {
        showError("website", "Please enter a valid URL (e.g. https://example.com)");
        return false;
    }
    showSuccess("website");
    return true;
}

// --- About ---
function validateAbout() {
    const value = fields.about.value.trim();
    if (value === "") {
        showError("about", "Please tell us something about yourself.");
        return false;
    }
    if (value.length < 20) {
        showError("about", "Must be at least 20 characters (" + value.length + "/20).");
        return false;
    }
    showSuccess("about");
    return true;
}

// --- Terms ---
function validateTerms() {
    if (!fields.terms.checked) {
        showError("terms", "You must agree to the Terms & Conditions.");
        return false;
    }
    showSuccess("terms");
    return true;
}

// ============================================
// PASSWORD STRENGTH METER
// ============================================

function checkPasswordStrength(value) {
    const strengthEl = document.getElementById("passwordStrength");
    const fillEl = document.getElementById("strengthFill");
    const labelEl = document.getElementById("strengthLabel");

    if (value.length === 0) {
        strengthEl.classList.remove("visible");
        return;
    }

    strengthEl.classList.add("visible");

    let score = 0;
    if (value.length >= 8) score++;
    if (value.length >= 12) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^a-zA-Z0-9]/.test(value)) score++;

    const levels = [
        { label: "Very Weak", color: "#f43f5e", width: "15%" },
        { label: "Weak", color: "#f97316", width: "30%" },
        { label: "Fair", color: "#f59e0b", width: "55%" },
        { label: "Good", color: "#3b82f6", width: "75%" },
        { label: "Strong", color: "#10b981", width: "100%" },
    ];

    const level = levels[Math.min(score, 4)];
    fillEl.style.width = level.width;
    fillEl.style.background = level.color;
    labelEl.textContent = level.label;
    labelEl.style.color = level.color;
}

// ============================================
// REAL-TIME (BLUR) VALIDATION
// ============================================

fields.fullName.addEventListener("blur", validateFullName);
fields.username.addEventListener("blur", validateUsername);
fields.email.addEventListener("blur", validateEmail);
fields.phone.addEventListener("blur", validatePhone);
fields.dob.addEventListener("blur", validateDob);
fields.gender.addEventListener("blur", validateGender);
fields.password.addEventListener("blur", validatePassword);
fields.confirmPassword.addEventListener("blur", validateConfirmPassword);
fields.website.addEventListener("blur", validateWebsite);
fields.about.addEventListener("blur", validateAbout);

// Live re-validate confirmPassword when password changes
fields.password.addEventListener("input", function () {
    checkPasswordStrength(this.value);
    if (fields.confirmPassword.value !== "") {
        validateConfirmPassword();
    }
});

// Char counter for About
fields.about.addEventListener("input", function () {
    document.getElementById("aboutCount").textContent = this.value.length;
});

// ============================================
// PASSWORD TOGGLE VISIBILITY
// ============================================

function setupToggle(btnId, inputId) {
    document.getElementById(btnId).addEventListener("click", function () {
        const input = document.getElementById(inputId);
        if (input.type === "password") {
            input.type = "text";
            this.textContent = "🙈";
        } else {
            input.type = "password";
            this.textContent = "👁";
        }
    });
}

setupToggle("togglePassword", "password");
setupToggle("toggleConfirm", "confirmPassword");

// ============================================
// FORM SUBMIT
// ============================================

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Run all validations
    const results = [
        validateFullName(),
        validateUsername(),
        validateEmail(),
        validatePhone(),
        validateDob(),
        validateGender(),
        validatePassword(),
        validateConfirmPassword(),
        validateWebsite(),
        validateAbout(),
        validateTerms(),
    ];

    const isValid = results.every(function (r) { return r === true; });

    if (!isValid) {
        // Shake the submit button
        submitBtn.classList.add("shake");
        setTimeout(function () { submitBtn.classList.remove("shake"); }, 500);

        // Scroll to first error
        const firstInvalid = document.querySelector(".invalid");
        if (firstInvalid) {
            firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
            firstInvalid.focus();
        }
        return;
    }

    // Simulate async submission
    submitBtn.querySelector(".btn-text").textContent = "Submitting...";
    btnLoader.classList.add("show");
    submitBtn.disabled = true;

    setTimeout(function () {
        btnLoader.classList.remove("show");
        submitBtn.querySelector(".btn-text").textContent = "Submit";
        submitBtn.disabled = false;

        // Show success
        successBanner.classList.add("show");
        successBanner.scrollIntoView({ behavior: "smooth", block: "center" });

        // Log submitted data to console
        console.log("==============================");
        console.log("FORM SUBMITTED SUCCESSFULLY");
        console.log("==============================");
        console.log("Full Name :", fields.fullName.value.trim());
        console.log("Username  :", fields.username.value.trim());
        console.log("Email     :", fields.email.value.trim());
        console.log("Phone     :", fields.phone.value.trim());
        console.log("DOB       :", fields.dob.value);
        console.log("Gender    :", fields.gender.value);
        console.log("Website   :", fields.website.value.trim() || "N/A");
        console.log("About     :", fields.about.value.trim());
        console.log("Terms     : Accepted");
        console.log("==============================");

    }, 1800);
});

// ============================================
// FORM RESET
// ============================================

resetBtn.addEventListener("click", function () {
    form.reset();
    successBanner.classList.remove("show");

    Object.keys(fields).forEach(function (key) {
        clearFieldState(key);
    });

    document.getElementById("aboutCount").textContent = "0";

    const strengthEl = document.getElementById("passwordStrength");
    strengthEl.classList.remove("visible");

    console.log("Form has been reset.");
});
