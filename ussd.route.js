const express = require("express");
const router = express.Router();
const {ussdRouter} = require("ussd-router");

//post, delete, update, read, call, send

router.post('/', async(req, res, next) => {
    try {
        const { sessionId, serviceCode, phoneNumber, text } = req.body

        const footer = '\n0: Back 00: Home';
        let response = ""
        var data = text.split('*')

        if (text == '') {
            response = `
            CON Welcome to Celo Wallet
            1: Balance
            `
        } else if (text == '1') {
            response = `
            CON Your Balance is 1000 cUSD
            ${footer}
            `
        }
    } catch {

    }
})

module.exports = router

