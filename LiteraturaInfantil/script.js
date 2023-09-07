// script.js

document.addEventListener("DOMContentLoaded", function () {
    const newsletterForm = document.getElementById("newsletterForm");

    newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const emailInput = document.getElementById("email").value;
        
        // Aqui, você pode adicionar código para processar a inscrição na newsletter.
        // Por enquanto, apenas exibiremos um alerta com o email inserido.
        alert(`O email ${emailInput} foi inscrito na newsletter!`);
        newsletterForm.reset();
    });
});

/*function toggleSummary(bookId) {
    const summary = document.getElementById(`${bookId}-summary`);
    if (summary.style.display === "none" || summary.style.display === "") {
        summary.style.display = "block";
    } else {
        summary.style.display = "none";
    }
}
*/

document.addEventListener("DOMContentLoaded", function () {
    const summaries = document.querySelectorAll(".summary");
    summaries.forEach(function (summary) {
        summary.style.display = "none";
    });
});

function toggleSummary(bookId) {
    const summary = document.getElementById(`${bookId}-summary`);
    if (summary.style.display === "none" || summary.style.display === "") {
        summary.style.display = "block";
    } else {
        summary.style.display = "none";
    }
}