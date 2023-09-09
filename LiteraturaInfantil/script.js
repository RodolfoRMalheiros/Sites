
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

document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão de volta ao topo
    var btnTopo = document.getElementById("btnTopo");

    // Adiciona um evento de clique ao botão
    btnTopo.addEventListener("click", function () {
        // Faz a animação de scroll suave para o topo da página
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Mostra ou oculta o botão dependendo da posição do usuário na página
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 100) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    });
});
