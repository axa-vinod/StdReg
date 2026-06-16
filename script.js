document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("message").textContent =
        `Registration Successful! Welcome, ${name}.`;

    this.reset();
});