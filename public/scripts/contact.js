document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formObject),
        });
        const data = await response.json();
        alert(data.message);
        form.reset();
    } catch (error) {
        alert("An error occurred. Please try again.");
    }
});