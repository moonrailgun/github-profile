chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const paths = ['https://github.com/*?tab=profile*'];

  try {
    chrome.webRequest.onBeforeRequest.addListener(
      (details) => {
        console.log('Abort web request for profile');

        return {
          cancel: true,
        };
      },
      { urls: paths, types: ['xmlhttprequest'] },
      ['blocking']
    );
    chrome.webRequest.onCompleted;
  } catch (e) {
    sendResponse(e);
  }
});
