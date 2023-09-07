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

function toggleSummary(bookId) {
    const summaries = document.querySelectorAll(".summary");
    summaries.forEach(function (summary) {
        if (summary.id === `${bookId}-summary`) {
            // Se o summary corresponder ao livro clicado, alterna sua visibilidade.
            if (summary.style.display === "block") {
                summary.style.display = "none";
            } else {
                summary.style.display = "block";
            }
        } else {
            // Caso contrário, fecha todas as outras summaries.
            summary.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const booksContainer = document.querySelector(".books-container");
    const books = document.querySelectorAll(".book");
    const booksPerPage = 3; // Número de livros para exibir inicialmente
    let currentPage = 1;

    // Função para mostrar os próximos livros
    function showNextBooks() {
        const startIndex = (currentPage - 1) * booksPerPage;
        const endIndex = startIndex + booksPerPage;

        books.forEach((book, index) => {
            if (index >= startIndex && index < endIndex) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        });

        currentPage++;

        // Ocultar o botão "Carregar Mais" quando todos os livros foram exibidos
        if (endIndex >= books.length) {
            loadMoreBtn.style.display = "none";
        }
    }

    // Event listener para o botão "Carregar Mais"
    loadMoreBtn.addEventListener("click", showNextBooks);

    // Exibir os primeiros livros
    showNextBooks();
});
