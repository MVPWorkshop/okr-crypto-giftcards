const axios = require('axios');

module.exports = {
    saveGiftCard: function (publicKey, email, coin, recipientName, country, city, address) {
        let postUrl = "https://docs.google.com/forms/d/e/1FAIpQLSelnFqV5VPtrc4JV1ZOe8rOVZaX-OtuswbdF3Movj7kvVzWTA/formResponse";
        postUrl += "?entry.597869783=" + publicKey;
        postUrl += "&entry.1238786204=" + email;
        postUrl += "&entry.1016110849=" + coin;
        postUrl += "&entry.1396269253=" + recipientName;
        postUrl += "&entry.310473191=" + country;
        postUrl += "&entry.260029024=" + city;
        postUrl += "&entry.792568688=" + address;

        axios.post(postUrl)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })

    }
}