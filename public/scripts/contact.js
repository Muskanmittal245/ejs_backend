// app.get('/contact', (req, res) => {
//     res.render('contact');
//   });
  
//   app.post('/contact-form', (req, res) => {
    
//     console.log(req.body);
//     res.send("Thank you! We'll get back to you.");
//   });







// document.getElementById("contact-form").addEventListener("submit", async (e) => {
//     e.preventDefault();
//     console.log("Form submitted!");

//     const name = document.getElementById("contact-name").value;
//     const email = document.getElementById("contact-email").value;
//     const phone = document.getElementById("contact-phone").value;
//     const message = document.getElementById("contact-message").value;

//     console.log({ name, email, phone, message });

//     try {
//         const response = await fetch("/api/contact", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ name, email, mobile: phone, message }),
//         });

//         const result = await response.json();

//         if (response.ok) {
//             alert(result.message);
//             document.getElementById("contact-form").reset();
//         } else {
//             alert(result.error || "An error occurred. Please try again.");
//         }
//     } catch (error) {
//         console.error("Error submitting the form:", error);
//         alert("An error occurred. Please try again.");
//     }
// });













document.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const message = document.getElementById("contact-message").value;

    const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();
    alert(result.message);

    if (response.ok) {
        document.getElementById("contact-form").reset();
    }
});