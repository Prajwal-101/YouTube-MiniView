document.addEventListener('DOMContentLoaded', () => {
    let video = document.querySelector('video');
    if (video) {
      video.addEventListener('play', () => {
        if (document.pictureInPictureElement) {
          document.exitPictureInPicture();
        } else {
          video.requestPictureInPicture();
        }
      });
    }
  });
  