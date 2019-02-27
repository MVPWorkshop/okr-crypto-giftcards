const bip38 = require('bip38')
const bitcoin = require('bitcoinjs-lib')
const coininfo = require('coininfo')
const coinkey = require('coinkey')
const sendGiftCard = require('../services/send-giftcard')

const supportedCoins = [
    'BCH',
    'BTC',
    'BTG',
    'DASH',
    'DCR',
    'DOGE',
    'LTC',
    'ZEC',
]

const addressGenerator = {
    generateKeyPair,
}

function generateKeyPair(passphrase, coin = 'BTC') {
    if (!supportedCoins.includes(coin)) return console.log('Wrong coin')

    const keyPair = coinkey.createRandom(coininfo(coin));
    const {privateKey} = keyPair

    return {
        publicKey: keyPair.publicAddress,
        privateKey: bip38.encrypt(privateKey, true, passphrase),
        coin,
    }
}

// sendGiftCard.saveGiftCard("public key", 'email', "coin", "recipient name", "country", "city", "address");

// supportedCoins.forEach((coin) => console.log(generateKeyPair('Random pass', coin)))