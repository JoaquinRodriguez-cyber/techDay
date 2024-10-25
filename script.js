function checkAddiction() {
    const q1 = parseInt(document.getElementById("q1").value);
    const q2 = parseInt(document.getElementById("q2").value);
    const q3 = parseInt(document.getElementById("q3").value);
    const q4 = parseInt(document.getElementById("q4").value);
    const q5 = parseInt(document.getElementById("q5").value);
    const total = q1 + q2 + q3 + q4 + q5;
    let message = "";

    if (total >= 1) {
        message = "Parece que puedes estar en riesgo de adicción. ¡Busca ayuda!";
    } else {
        message = "Todo parece estar bien, pero siempre juega con responsabilidad.";
    }

    alert(message);
}
