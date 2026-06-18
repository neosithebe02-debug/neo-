
function placeOrder(productName) {
    alert("Thank you for ordering " + productName + "!");
}


function submitMessage(event) {
    event.preventDefault();

    let fullname = document.getElementById("fullname").value;

    alert("✅ Thank you, " + fullname + "! Your message has been submitted successfully.");

    document.querySelector("form").reset();
}


function setupPage() {

    
    let buttons = document.querySelectorAll(".menu-item button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            let productName = this.parentElement.querySelector("h3").textContent;
            placeOrder(productName);
        });
    });

    
    let form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", submitMessage);
    }
}


document.addEventListener("DOMContentLoaded", setupPage);