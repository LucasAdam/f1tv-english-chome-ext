chrome.webRequest.onBeforeSendHeaders.addListener(
    (details) => {
        var headers = details.requestHeaders
        if (details.url.indexOf('https://f1tv.formula1.com/api/commentary-tracks') === 0) {
            headers = []
        }
        return { requestHeaders: headers };
    },
    {urls: ['https://*.formula1.com/*']},
    ['blocking', 'requestHeaders']
);