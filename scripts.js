const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-covert");
    const currencyvalueToConverted = document.querySelector(".currency-value");

    // Busca os dados da API
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json());

    const dolar = data.USDBRL.high;
    const euro = data.EURBRL.high;
    const bitcoin = data.BTCBRL.high;

    // Converte para dólar
    if (currencySelect.value == "dolar") {
        currencyvalueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolar);
    }

    // Converte para euro
    if (currencySelect.value == "euro") {
        currencyvalueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euro);
    }

    // Converte para bitcoin
    if (currencySelect.value == "bitcoin") {
        currencyvalueToConverted.innerHTML = new Intl.NumberFormat("en-BT", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoin);
    }

    // Exibe o valor original em reais
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
};

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    // Altera o nome e imagem da moeda selecionada
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImage.src = "./dolar.png";
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./euro.png";
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./bitcoin.png";
    }

    convertValues();
}

// Eventos
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
