function searchServices() {
    let query = document.getElementById("search").value;
    if (query) {
        alert(`Searching for: ${query}`);
    } else {
        alert("Please enter a service to search for!");
    }
}






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