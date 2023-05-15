const video = document.querySelector('[data-video]');

export const initVideo = () => {
  if (video) {
    const playButton = video.querySelector('[data-video-play]');
    if (playButton) {
      playButton.addEventListener('click', () => {
        video.classList.add('is-active');
      });
    }
  }
};
