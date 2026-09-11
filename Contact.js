document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const whatsapp = document.getElementById("whatsapp").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !whatsapp || !message) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        const monNumeroWhatsApp = "22969415905";

        const texte =
            "📩 Nouveau message - 1xbet Coupons\n\n" +
            "Nom : " + name + "\n" +
            "WhatsApp : " + whatsapp + "\n\n" +
            "Message :\n" + message;

        const lienWhatsApp =
            "https://wa.me/" + monNumeroWhatsApp +
            "?text=" + encodeURIComponent(texte);

        window.open(lienWhatsApp, "_blank");

        form.reset();

    });

});