
(function(){
    emailjs.init({
        publicKey: "Y6VsE4Zvi9PgJjtUj", 
    });
})();


function sendMail(event) {
    event.preventDefault(); // Prevent form submission
    let parms = {
        name : document.getElementById("name").value,
        phone : document.getElementById("phone").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    };
    emailjs.send("service_00rx7h9", "template_0h41mo8", parms)
        .then(function(response) {
            alert("Email Sent!");
            resetForm();
        }, function(error) {
            console.error("Error sending email:", error);
            alert("Failed to send email. Please try again later.");
        });
}

function resetForm() {
    // Clear all input fields in the form
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}