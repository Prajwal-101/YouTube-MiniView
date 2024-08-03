document.getElementById('pipButton').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: togglePictureInPicture,
    });
  });
  
  function togglePictureInPicture() {
    let video = document.querySelector('video');
    if (video) {
      if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
      } else {
        video.requestPictureInPicture();
      }
    } else {
      alert('No video found on this page.');
    }
  }
  