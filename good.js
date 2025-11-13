const form = document.getElementById("contact-form");

form.addEventListener("submit", async(e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch(form.action, {
        method: form.method,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: json,
    });

    if (response.ok) {
        alert("Thank you! Your message has been sent successfully.");
        form.reset();
    } else {
        alert("Oops! There was a problem sending your message. Try again later.");
    }



});