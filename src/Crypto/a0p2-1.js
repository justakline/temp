const axios = require('axios');
const accounting = require('accounting')
//I had to do some investigating... I found marlon's address, but it was unavailable, so I had to find his address hash
//Then I used his address to find all of the transactions he had for the bored ape yacht club and specifically ape #1880
//But then I realized that this was only showing the trnasfers FROM his account to another... so I did more investigating
//to find the account that transfered it to him, and that is the addressLookup account 

//Also, the api call to get the transaction by the hash was not on the api documentation... it took a while to find

const toDecimal = 10**18
const api = "NC6N19YDKTDBDNPT2G6QEWN2QVEU52G5DA"
const addressLookup = '0xB910BC25fC55b48Fb073517487DC5Ac71d90F601'
var url = `https://api.etherscan.io/api
?module=account
&action=tokennfttx
&address=${addressLookup}
&page=1
&offset=100
&startblock=0
&endblock=27025780
&sort=asc
&apikey=${api}`

axios.get(url).
    then(response => {
        //This is the transaction json object
        var transaction = response.data.result.filter(obj=>(obj.tokenSymbol =="BAYC" && obj.tokenID == "1880"))
        var hash = transaction[0].hash
        console.log(transaction)
        console.log(hash)
        url = `https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${hash}&apikey=${api}`;
        axios.get(url)
        return axios.get(url)

        // console.log(response.data.result.find(obj=>obj.tokenID ="1880"));
}).then(response2 =>{
    var totalEth = response2.data.result.value/toDecimal
    console.log(`Marlon Humphrey Sold his Bored Ape #1880 for ${totalEth} ETH`)

}).catch(error =>{
    console.log(error.message)
})



