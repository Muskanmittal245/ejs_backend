document.getElementById("appointment-form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form submission

    const form = document.getElementById("appointment-form");
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("/api/booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formObject),
        });

        const data = await response.json();

        if (data.success) {
            alert("Your appointment is booked");
            form.reset(); // Clear the form fields
        } else {
            alert(data.message || "Booking failed");
        }
    } catch (error) {
        alert("An error occurred. Please try again.");
    }
});