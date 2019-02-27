const wip = require('wip')
const bitcoin = require('bitcoinjs-lib')

const keyPair = bitcoin.ECPair.makeRandom()
const { publicKey, privateKey } = keyPair

console.log({ publicKey, privateKey })