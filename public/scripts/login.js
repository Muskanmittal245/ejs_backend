// // Get elements
// const previewBtn = document.getElementById("preview-btn");
// const signUpForm = document.getElementById("signup-form");
// const loginForm = document.getElementById("login-form");
// const signUpLink = document.getElementById("sign-up-link");
// const loginLink = document.getElementById("login-link");

// // Open Sign-Up Form when Preview Button is Clicked
// previewBtn.addEventListener("click", () => {
//     loginForm.classList.add("hidden");
//     signUpForm.classList.remove("hidden");
// });

// // Switch to Sign-Up Form
// signUpLink.addEventListener("click", () => {
//     loginForm.classList.add("hidden");
//     signUpForm.classList.remove("hidden");
// });

// // Switch to Login Form
// loginLink.addEventListener("click", () => {
//     signUpForm.classList.add("hidden");
//     loginForm.classList.remove("hidden");
// });

// // Handle Signup Form Submission
// document.querySelector("#signup-form form").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const name = document.querySelector("#signup-form input[type='text']").value;
//     const email = document.querySelector("#signup-form input[type='email']").value;
//     const password = document.querySelector("#signup-form input[type='password']").value;

//     const response = await fetch("http://localhost:3000/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//     });

//     const result = await response.json();
//     alert(result.message);

//     if (response.ok) {
//         signUpForm.classList.add("hidden");
//         loginForm.classList.remove("hidden");

//     }

    
    
// });

// // Handle Login Form Submission
// document.querySelector("#login-form form").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const email = document.querySelector("#login-form input[type='email']").value;
//     const password = document.querySelector("#login-form input[type='password']").value;

//     const response = await fetch("http://localhost:3000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//     });

//     const result = await response.json();
//     alert(result.message);

//     if (response.ok) {
//         window.location.href = "/welcome"; // Redirect after successful login
//     }
// });







// // Get elements
// const previewBtn = document.getElementById("preview-btn");
// const signUpForm = document.getElementById("signup-form");
// const loginForm = document.getElementById("login-form");
// const signUpLink = document.getElementById("sign-up-link");
// const loginLink = document.getElementById("login-link");

// // Open Sign-Up Form when Preview Button is Clicked
// previewBtn.addEventListener("click", () => {
//     loginForm.classList.add("hidden");
//     signUpForm.classList.remove("hidden");
// });

// // Switch to Sign-Up Form
// signUpLink.addEventListener("click", () => {
//     loginForm.classList.add("hidden");
//     signUpForm.classList.remove("hidden");
// });

// // Switch to Login Form
// loginLink.addEventListener("click", () => {
//     signUpForm.classList.add("hidden");
//     loginForm.classList.remove("hidden");
// });

// // Handle Signup Form Submission
// document.querySelector("#signup-form form").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const name = document.querySelector("#signup-form input[type='text']").value;
//     const email = document.querySelector("#signup-form input[type='email']").value;
//     const password = document.querySelector("#signup-form input[type='password']").value;

//     const response = await fetch("http://localhost:8080/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//     });

//     const result = await response.json();
//     alert(result.message);

//     if (response.ok) {
//         signUpForm.classList.add("hidden");
//         loginForm.classList.remove("hidden");
//     }
// });

// // Handle Login Form Submission
// document.querySelector("#login-form form").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const email = document.querySelector("#login-form input[type='email']").value;
//     const password = document.querySelector("#login-form input[type='password']").value;

//     const response = await fetch("http://localhost:8080/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//     });

//     const result = await response.json();
//     alert(result.message);

//     if (response.ok) {
//         window.location.href = "../about/about.html"; // Redirect to the about page after successful login
//     }
// });


// Get elements
// const previewBtn = document.getElementById("preview-btn");
// const signUpForm = document.getElementById("signup-form");
// const loginForm = document.getElementById("login-form");
// const signUpLink = document.getElementById("sign-up-link");
// const loginLink = document.getElementById("login-link");

// Open Sign-Up Form when Preview Button is Clicked
// previewBtn.addEventListener("click", () => {
//     loginForm.classList.add("hidden");
//     signUpForm.classList.remove("hidden");
// });

// Switch to Sign-Up Form
// signUpLink.addEventListener("click", () => {
//     loginForm.classList.add("hidden");
//     signUpForm.classList.remove("hidden");
// });

// Switch to Login Form
// loginLink.addEventListener("click", () => {
//     signUpForm.classList.add("hidden");
//     loginForm.classList.remove("hidden");
// });

// Handle Signup Form Submission
// document.querySelector("#signup-form-element").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const name = document.querySelector("#signup-name").value;
//     const email = document.querySelector("#signup-email").value;
//     const password = document.querySelector("#signup-password").value;

//     const response = await fetch("http://localhost:8080/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//     });

//     const result = await response.json();
//     alert(result.message);

//     if (response.ok) {
//         signUpForm.classList.add("hidden");
//         loginForm.classList.remove("hidden");
//     }
// });

// // Handle Login Form Submission
// document.querySelector("#login-form-element").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const email = document.querySelector("#login-email").value;
//     const password = document.querySelector("#login-password").value;

//     const response = await fetch("http://localhost:8080/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//     });

//     const result = await response.json();
//     alert(result.message);

//     if (response.ok) {
//         window.location.href = "../about"; // Redirect to the about page after successful login
//     }
// });




const signUpForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const signUpLink = document.getElementById("sign-up-link");
const loginLink = document.getElementById("login-link");

// Switch to Sign-Up Form
signUpLink.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    signUpForm.classList.remove("hidden");
});

// Switch to Login Form
loginLink.addEventListener("click", () => {
    signUpForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

// Handle Signup Form Submission
document.querySelector("#signup-form-element").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.querySelector("#signup-name").value;
    const email = document.querySelector("#signup-email").value;
    const password = document.querySelector("#signup-password").value;

    const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });

    const result = await response.json();
    alert(result.message);

    if (response.ok) {
        signUpForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    }
});

// Handle Login Form Submission
document.querySelector("#login-form-element").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;

    const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    alert(result.message);

    if (response.ok) {
        window.location.href = "../about"; // Change this if needed
    }
});