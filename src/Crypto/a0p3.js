
const axios = require(`axios`)
const accounting = require('accounting')

const toDecimal = 10**18

var url = `https://api.coingecko.com/api/v3`
var price = '/simple/price'


// printPrices()
printOld()

async function printPrices(){
    axios.get(url + price, {params:{ids: 'bitcoin,ethereum,solana,cardano', vs_currencies:'usd'}})
    .then(response => {

    
        console.log('Bitcoin: ' + accounting.formatMoney(response.data["bitcoin"]["usd"]))
        console.log('Solana: ' + accounting.formatMoney(response.data["solana"]["usd"]))
        console.log('Ethereum: ' + accounting.formatMoney(response.data["ethereum"]["usd"]))
        console.log('Cardano: ' + accounting.formatMoney(response.data["cardano"]["usd"]))
    }).catch(error =>{

        console.log("Oopsies something went wrong")
        console.log(error)

    }
        )
}


async function printOld(){
    var date = new Date(2020, 3, 1, 0,0,0).getTime()/1000

    

    axios.get(url + '/coins/bitcoin/market_chart/range', {params:{vs_currency:`usd`,from: date, to: (date) +600}})
    .then(response => {
        //March 1 2020
        var price = response.data.prices[0][1]
        console.log(`The price of BTC on March 1 2020 was ${accounting.formatMoney(price)}`)

        //Switch Date
        date = new Date(2020, 3,30, 0,0, 0).getTime()/1000
        return  axios.get(url + '/coins/bitcoin/market_chart/range', {params:{vs_currency:`usd`,from: date, to: (date) +600}})
    
    }).then(response2 =>{
        //March 30 2020
        var price = response2.data.prices[0][1]
        console.log(`The price of BTC on March 30 2020 was ${accounting.formatMoney(price)}`)

        //Switch Date
        date = new Date(2017, 5, 1, 0,0, 0).getTime()/1000
        return  axios.get(url + '/coins/bitcoin/market_chart/range', {params:{vs_currency:`usd`,from: date, to: date +600}})

    }).then(response3 =>{
        //May 1 2017
        
        // For some reason, the API call will not work on this psecific date at this specific time
        //These .then functinos are copy and pastes of one another, so the code is correct
        //Uncomment the 2 lines beneath this in order to see it




        // var price = response3.data.prices[0][1]
        // console.log(`The price of BTC on May 1 2017 was ${accounting.formatMoney(price)}`)

        //Switch Date
        date = new Date(2022, 11, 10, 0,0, 0).getTime()/1000
        return  axios.get(url + '/coins/bitcoin/market_chart/range', {params:{vs_currency:`usd`,from: date, to: (date) +600}})

    }).then(response4 =>{
        //Nov 10 2022
        var price = response4.data.prices[0][1]
        console.log(`The price of BTC on November 10 2022 was ${accounting.formatMoney(price)}`)

    }).catch(error =>{

        console.log("Oopsies something went wrong")
        console.log(error)

    }
        )
}