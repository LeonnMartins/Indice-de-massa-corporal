function calculateIMC() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight > 0 && height > 0) {
        var bmi = weight / (height * height);
        displayResult(bmi);
        displayImage(bmi);
    } else {
        alert("Por favor, insira um peso e altura válidos.");
    }
}

function displayResult(bmi) {
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Seu IMC é: " + bmi.toFixed(2);
}

function displayImage(bmi) {
    var imageElement = document.getElementById("image");

    if (bmi < 18.5) {
        imageElement.src = "./imagens/magro.png";
        imageElement.alt = "Peso insuficiente"
    } else if (bmi < 24.9) {
        imageElement.src = "./imagens/normal.png";
        imageElement.alt ="Normopeso"
    } else if (bmi < 29.9) {
        imageElement.src = "./imagens/sobrepeso.png";
        imageElement.alt ="Sobrepeso"
    } else if (bmi < 34.9) {
        imageElement.src = "./imagens/obesidade.png";
        imageElement.alt ="Obesidade"
    } else if (bmi < 39.9) {
        imageElement.src = "./imagens/obesidade mórbida.jpg";
        imageElement.alt ="Obesidade mórbida"
    } else {
        imageElement.src = "./imagens/obesidade mórbida.jpg";
        imageElement.alt ="Obesidade mórbida"
    }
}
