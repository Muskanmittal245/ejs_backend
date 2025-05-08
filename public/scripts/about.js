// function searchServices() {
//     let query = document.getElementById("search").value;
//     if (query) {
//         alert(Searching for: ${query});
//     } else {
//         alert("Please enter a service to search for!");
//     }
// }






// document.getElementById("contact-form").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const name = document.getElementById("contact-name").value;
//     const email = document.getElementById("contact-email").value;
//     const message = document.getElementById("contact-message").value;

//     const response = await fetch("http://localhost:8080/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, message }),
//     });

//     const result = await response.json();
//     alert(result.message);

//     if (response.ok) {
//         document.getElementById("contact-form").reset();
//     }
// });




function searchServices() {
    let query = document.getElementById("search").value.toLowerCase().trim();
    let serviceCards = document.querySelectorAll(".service-card");
    let found = false;

    serviceCards.forEach((card) => {
        let title = card.querySelector("h3").innerText.toLowerCase();
        let description = card.querySelector("p").innerText.toLowerCase();

        if (title.includes(query) || description.includes(query)) {
            card.style.display = "inline-block"; // show matching
            found = true;
        } else {
            card.style.display = "none"; // hide non-matching
        }
    });

    if (!query) {
        // If query is empty, show all again
        serviceCards.forEach((card) => card.style.display = "inline-block");
    } else if (!found) {
        alert("No matching service found.");
    }
}

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const message = document.getElementById("contact-message").value;

    try {
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
    } catch (error) {
        console.error("Error submitting contact form:", error);
        alert("Something went wrong. Please try again later.");
    }
});