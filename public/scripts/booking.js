// document.getElementById("appointment-form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     alert("Appointment successfully submitted!");
//     this.reset();
// });




document.getElementById("appointment-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const nic = document.getElementById("nic").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const appointmentTime = document.getElementById("appointmentTime").value;
    const department = document.getElementById("department").value;
    const doctorName = document.getElementById("doctorName").value;
    const address = document.getElementById("address").value;

    const response = await fetch("http://localhost:8080/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, mobileNumber, nic, dob, gender, appointmentDate, appointmentTime, department, doctorName, address }),
    });

    const result = await response.json();
    alert(result.message);

    if (response.ok) {
        form.reset();
    }
});