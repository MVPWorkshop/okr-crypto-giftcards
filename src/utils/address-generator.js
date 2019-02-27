const bitcoin = require('bitcoinjs-lib')
const coininfo = require('coininfo')
const coinkey = require('coinkey')
const sendGiftCard = require('../services/send-giftcard')

const bip38 = require('./bip38')

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
    const { versions } = coininfo(coin)

    const network = {
      private: versions.private,
      public: versions.public,
    }

    return {
        publicKey: keyPair.publicAddress,
        encryptedPrivateKey: bip38.encrypt(privateKey, true, passphrase, null, null, network),
        rawPrivateKey: privateKey.toString('hex'),
        coin,
    }
}

console.log(generateKeyPair('Random pass', 'LTC'))