chrome.webRequest.onBeforeSendHeaders.addListener(
    (details) => {
        if (details.url.includes('commentary-tracks')) {
            details.requestHeaders = []
            details.requestHeaders.push({name:"X-CountryCode",value:"FR"})
        }
        return { requestHeaders: details.requestHeaders };
    },
    {urls: ['https://*.formula1.com/*']},
    ['blocking', 'requestHeaders']
);