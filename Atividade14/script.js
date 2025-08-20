function validar() {
    let form = document.nomeform.elements;

    if (form["nome"].value.length < 10) {
        alert("O nome deve ter no mínimo 10 caracteres.");
        form["nome"].focus();
        return false;
    }

    if (form["comentario"].value.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        form["comentario"].focus();
        return false;
    }

    let pesquisa = form["pesquisa"].value;
    if (!pesquisa) {
        alert("Você deve responder à pesquisa.");
        return false;
    } else {
        if (pesquisa === "sim") {
            alert("Volte sempre à esta página!");
        } else {
            alert("Que bom que você voltou a visitar esta página!");
        }
    }

    return true;
}
