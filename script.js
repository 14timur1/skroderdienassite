let score = {
    antonija: 0,
    dudars: 0,
    aleksis: 0
};

function answer(type) {
    score[type]++;

    let resultText = "";

    if (score.antonija >= 2) {
        resultText = "Tu esi Antonija — jūtīgs un spēcīgs cilvēks ❤️";
    } 
    else if (score.dudars >= 2) {
        resultText = "Tu esi Dūdars — jautrs un enerģisks 😄";
    } 
    else if (score.aleksis >= 2) {
        resultText = "Tu esi Aleksis — mierīgs un pārdomāts 🧠";
    }

    document.getElementById("result").innerText = resultText;
}