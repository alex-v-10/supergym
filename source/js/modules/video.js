const video = document.querySelector('[data-video]');
const playButton = video.querySelector('[data-video-play]');
const videoFrame = video.querySelector('iframe');

export const initVideo = () => {
  playButton.addEventListener('click', () => {
    video.classList.add('is-active');
    // const videoSrc = videoFrame.getAttribute('src') + '?mute=1&autoplay=1';
    // console.log(videoSrc);
    // videoFrame.setAttribute('src', videoSrc);
  });
};
