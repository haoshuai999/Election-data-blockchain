let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let xhr = new XMLHttpRequest();
let yourUrl = "https://mainnet.infura.io/v3/c0b73b8973c74d7abdd0013949f3c214";
xhr.open("POST", yourUrl, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    "jsonrpc":"2.0",
    "method":"eth_getBalance",
    "params": ["0xBf4eD7b27F1d666546E30D74d50d173d20bca754", "latest"],
    "id":1
}));

xhr.onreadystatechange = (e) => {
    console.log(xhr.responseText)
}