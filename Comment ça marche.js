document.addEventListener("DOMContentLoaded", function () {

    const faqButton = document.querySelector(".how-button.secondary");

    if (faqButton) {
        faqButton.addEventListener("click", function (event) {

            event.preventDefault();

            alert("La FAQ sera bientôt disponible.");

        });
    }

});