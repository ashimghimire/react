var axios = require('axios');



const fetchCoinsExchange = async () => {
    try {
        const headers = {
            'X-CMC_PRO_API_KEY': "f984d61a-bde2-4e9b-8233-551ffd5c009c",
            "Accept": 'application/json'
        };
        let result = await axios({
            url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/latest`,
            headers: headers,
            method: 'GET'
        });

        if (result) {
            return result.data;
        }
    } catch (e) {
        console.log(e);
    }
}

fetchCoinsExchange();