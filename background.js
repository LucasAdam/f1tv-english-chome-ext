chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        if (details.method === 'GET') {
            var reg = new RegExp("(http[s]?:\/\/)?([^\/\s]+\/agl\/1.0\/[a-zA-Z]{2,3}\/)([a-zA-Z]{2,3})(/.*)commentary-tracks")
            var newURL = 'https://f1tv-api.formula1.com/agl/1.0/fr/en/all_devices/global/commentary-tracks'
            if (reg.test(details.url) && details.url !== newURL) {
                return { redirectUrl: newURL}
            }
        }
    },
    {urls: ['https://*.formula1.com/*']},
    ['blocking']
);