import { dump } from './keystore';

const nacl = require('tweetnacl')
const bitcoin = require('bitcoinjs-lib')
const coininfo = require('coininfo')
const coinkey = require('coinkey')
const bs58check = require('bs58check')
const sendGiftCard = require('../services/send-giftcard')

import * as Crypto from '@aeternity/aepp-sdk/es/utils/crypto'
// import * as keystore from '@aeternity/aepp-sdk/es/utils/keystore'

const bip38 = require('./bip38')

export const supportedCoins = [
    'BCH',
    'BTC',
    'BTG',
    'DASH',
    // 'DCR',
    'DOGE',
    'LTC',
    // 'ZEC',
    'AE'
]

export const addressGenerator = {
    generateKeyPair,
}

function encodeBase58Check(input) {
    return bs58check.encode(Buffer.from(input))
}

export function printUnderscored(key, val) {
    print(`${key}${R.repeat('_', WIDTH - key.length).reduce((a, b) => a += b, '')} ${typeof val !== 'object' ? val : JSON.stringify(val)}`)
}

async function generateKeyPair(passphrase, coin = 'BTC') {
    if (!supportedCoins.includes(coin)) return console.log('Wrong coin')

    if (coin === 'AE') {

        const keyPair = nacl.sign.keyPair()
        console.log({ keyPair })

        const publicBuffer = Buffer.from(keyPair.publicKey)
        const secretBuffer = Buffer.from(keyPair.secretKey)

        console.log({
            publicBuffer, secretBuffer
        })

        console.log({
            publicKey: `ak_${encodeBase58Check(publicBuffer)}`,
            secretBuffer: secretBuffer.toString('hex'),
        })

        const hexStr = await Crypto.hexStringToByte(secretBuffer.toString('hex').trim())
        const keys = await Crypto.generateKeyPairFromSecret(hexStr)
        console.log({ keys })


        const keystore = await dump('keystore', passphrase, keys.secretKey)
        console.log({ keystore })

        return {
            publicKey: keystore.public_key,
            encryptedPrivateKey: JSON.stringify(keystore),
            // encryptedPrivateKey: JSON.stringify(keystore.crypto.ciphertext),
            rawPrivateKey: secretBuffer.toString('hex'),
            coin,
        }

    } else {
        const keyPair = coinkey.createRandom(coininfo(coin));
        const { privateKey } = keyPair
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
}

// console.log(generateKeyPair('Random pass', 'LTC'))