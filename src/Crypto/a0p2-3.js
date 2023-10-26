
const axios = require(`axios`)
const accounting = require('accounting')

const toDecimal = 10**18
const api = "NC6N19YDKTDBDNPT2G6QEWN2QVEU52G5DA"

var url = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${api}`

axios.get(url)
.then(response => {
    console.log(`The price of ETH in terms of USD is ${accounting.formatMoney(response.data.result.ethusd)}`)
    console.log(`The price of ETH in terms of BTC is ${response.data.result.ethbtc} BTC`)
}).catch(error =>{

    console.log("Oopsies something went wrong")
    console.log(error)

}
    )