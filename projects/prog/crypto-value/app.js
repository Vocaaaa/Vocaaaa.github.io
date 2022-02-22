const btcPriceElement = document.querySelector(".btc-value");
const ethPriceElement = document.querySelector(".eth-value");
const dogePriceElement = document.querySelector(".doge-value");
const sandPriceElement = document.querySelector(".sand-value");
const galaPriceElement = document.querySelector(".gala-value");
const bnbPriceElement = document.querySelector(".bnb-value");

const btcPercentElement = document.querySelector(".btc-percent");
const ethPercentElement = document.querySelector(".eth-percent");
const dogePercentElement = document.querySelector("doge-percent");
const sandPercentElement = document.querySelector(".sand-percent");
const galaPercentElement = document.querySelector(".gala-percent");
const bnbPercentElement = document.querySelector(".bnb-percent");

let lastPrice = 0;
let ethLastPrice = 0;
let dogeLastPrice = 0;
let sandLastPrice = 0;
let galaLastPrice = 0;
let bnbLastPrice = 0;

let priceChangePercent = 0;
let ethPriceChangePercent = 0;
let dogePriceChangePercent = 0;
let sandPriceChangePercent = 0;
let galaPriceChangePercent = 0;
let bnbPriceChangePercent = 0;

setInterval(fetchPrice, 2000);
setInterval(fetchPriceEth, 2000);
setInterval(fetchPriceDoge, 2000);
setInterval(fetchPriceSand, 2000);
setInterval(fetchPriceGala, 2000);
setInterval(fetchPriceBnb, 2000);

fetchPrice();
fetchPriceEth();
fetchPriceDoge();
fetchPriceSand();
fetchPriceGala();
fetchPriceBnb();

async function fetchPrice() {
    const response = await fetch("https://testnet.binancefuture.com/fapi/v1/ticker/24hr?symbol=BTCUSDT");
    const data = await response.json();
    btcPriceElement.innerText = "$ " + data.lastPrice;
    btcPercentElement.innerText = data.priceChangePercent + " %";
    console.log(data);

    if(data.lastPrice > lastPrice) {
        btcPriceElement.classList.remove("down");
        btcPriceElement.classList.add("up");
    } 
    else if(data.lastPrice < lastPrice) {
        btcPriceElement.classList.add("down");
        btcPriceElement.classList.remove("up");
    }

    lastPrice = data.lastPrice;

    if(data.priceChangePercent > priceChangePercent) {
        btcPercentElement.classList.remove("down");
        btcPercentElement.classList.add("up");
    }
    else if(data.priceChangePercent < priceChangePercent) {
        btcPercentElement.classList.add("down");
        btcPercentElement.classList.remove("up");
    }

    priceChangePercent = data.priceChangePercent;
};

async function fetchPriceEth() {
    const response = await fetch("https://testnet.binancefuture.com/fapi/v1/ticker/24hr?symbol=ETHUSDT");
    const data1 = await response.json();
    ethPriceElement.innerText = "$ " + data1.lastPrice;
    console.log(data1);

    if(data1.lastPrice > ethLastPrice) {
        ethPriceElement.classList.remove("down");
        ethPriceElement.classList.add("up");
    } 
    else if(data1.lastPrice < ethLastPrice) {
        ethPriceElement.classList.add("down");
        ethPriceElement.classList.remove("up");
    }

    ethLastPrice = data1.lastPrice;

    if(data1.priceChangePercent > priceChangePercent) {
        btcPercentElement.classList.remove("down");
        btcPercentElement.classList.add("up");
    }
    else if(data1.priceChangePercent < priceChangePercent) {
        btcPercentElement.classList.add("down");
        btcPercentElement.classList.remove("up");
    }

    priceChangePercent = data1.priceChangePercent;
};

async function fetchPriceDoge() {
    const response = await fetch("https://testnet.binancefuture.com/fapi/v1/ticker/24hr?symbol=DOGEUSDT");
    const data2 = await response.json();
    dogePriceElement.innerText = "$ " + data2.lastPrice;
    console.log(data2);

    if(data2.lastPrice > dogeLastPrice) {
        dogePriceElement.classList.remove("down");
        dogePriceElement.classList.add("up");
    } 
    else if(data2.lastPrice < dogeLastPrice) {
        dogePriceElement.classList.add("down");
        dogePriceElement.classList.remove("up");
    }

    dogeLastPrice = data2.lastPrice;
};
async function fetchPriceSand() {
    const response = await fetch("https://testnet.binancefuture.com/fapi/v1/ticker/24hr?symbol=SANDUSDT");
    const data3 = await response.json();
    sandPriceElement.innerText = "$ " + data3.lastPrice;
    console.log(data3);

    if(data3.lastPrice > sandLastPrice) {
        sandPriceElement.classList.remove("down");
        sandPriceElement.classList.add("up");
    } 
    else if(data3.lastPrice < sandLastPrice) {
        sandPriceElement.classList.add("down");
        sandPriceElement.classList.remove("up");
    }

    sandLastPrice = data3.lastPrice;
};
async function fetchPriceGala() {
    const response = await fetch("https://testnet.binancefuture.com/fapi/v1/ticker/24hr?symbol=GALAUSDT");
    const data4 = await response.json();
    galaPriceElement.innerText = "$ " + data4.lastPrice;
    console.log(data4);

    if(data4.lastPrice > galaLastPrice) {
        galaPriceElement.classList.remove("down");
        galaPriceElement.classList.add("up");
    } 
    else if(data4.lastPrice < galaLastPrice) {
        galaPriceElement.classList.add("down");
        galaPriceElement.classList.remove("up");
    }

    galaLastPrice = data4.lastPrice;
};
async function fetchPriceBnb() {
    const response = await fetch("https://testnet.binancefuture.com/fapi/v1/ticker/24hr?symbol=BNBUSDT");
    const data5 = await response.json();
    bnbPriceElement.innerText = "$ " + data5.lastPrice;
    console.log(data5);

    if(data5.lastPrice > bnbLastPrice) {
        bnbPriceElement.classList.remove("down");
        bnbPriceElement.classList.add("up");
    } 
    else if(data5.lastPrice < bnbLastPrice) {
        bnbPriceElement.classList.add("down");
        bnbPriceElement.classList.remove("up");
    }

    bnbLastPrice = data5.lastPrice;
};