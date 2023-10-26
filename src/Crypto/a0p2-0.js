const request = require('request')
const accounting = require('accounting')

const toDecimal = 10**18
const api = "NC6N19YDKTDBDNPT2G6QEWN2QVEU52G5DA"
request(`https://api.etherscan.io/api?module=account&action=balance&address=0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045&tag=latest&apikey=${api}`,

(err, response, body) =>{
        
        var value = JSON.parse(body).result
        var convertedValue = value / toDecimal
        console.log(`Vitalik holds about ${(convertedValue).toFixed(2)} ETH`)
        request(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${api}`, (err, response,body) =>{
            var usdPriceConvert = JSON.parse(body).result.ethusd;

            console.log(`In USD it is ${accounting.formatMoney((usdPriceConvert*convertedValue))}`)
        })

    })



