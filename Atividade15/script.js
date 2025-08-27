function abrirCurso() {
    const select = document.getElementById("cursos");
    const curso = select.value;

    if (curso !== "") {
        const confirmar = confirm(`Deseja abrir informações sobre o curso selecionado?`);
        if (confirmar) {
            window.open(curso, "_blank", "width=600,height=300");
        } else {
            select.value = ""; // reseta para evitar seleção acidental
        }
    }
}
