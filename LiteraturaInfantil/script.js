
document.addEventListener("DOMContentLoaded", function () {
    const summaries = document.querySelectorAll(".summary");

    summaries.forEach(function (summary) {
        summary.style.display = "none";
    });

    const books = document.querySelectorAll(".book");

    books.forEach(function (book) {
        const bookId = book.id;

        book.addEventListener("click", function () {
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
        });
    });
});

