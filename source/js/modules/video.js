const video = document.querySelector('[data-video]');
const playButton = video.querySelector('[data-video-play]');

export const initVideo = () => {
  playButton.addEventListener('click', () => {
    video.classList.add('is-active');
  });
};
