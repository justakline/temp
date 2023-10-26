const axios = require('axios')
const toDecimal = 10**18
const api = "NC6N19YDKTDBDNPT2G6QEWN2QVEU52G5DA"
const ens = 'TreySongz.eth'
const addressLookup = '0x7b775927FD637b3A53d0EE9E85321005666F3d49'

var url = `https://api.etherscan.io/api
?module=account
&action=txlist
&address=${addressLookup}
&page=0
&offset=100000
&startblock=0
&endblock=9999999999
&sort=asc
&apikey=${api}`



axios.get(url).
    then(response => {
        //Found all the transactions, now find the one with the toAddress being the recipient
        const toAddress = `0x5e0b733905CC54989Ec7c28A07c516e51c5Afedf`
        var transaction = response.data.result.find(obj => obj.to.toLowerCase() === toAddress.toLowerCase())
        const amount = transaction.value/toDecimal
        console.log(`TreySongz.eth sent ${amount.toFixed(2)} ETH to the address`)
        


}).catch(error =>{
    console.log(error.message)
})



