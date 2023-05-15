const items = document.querySelectorAll('[data-shadow]');

export const initShadow = () => {
  if (items.length) {
    for (const item of items) {
      const parent = item.parentNode;
      const shadow = document.createElement('span');
      shadow.classList.add('shadow');
      shadow.innerHTML = item.innerHTML;
      parent.prepend(shadow);
    }
  }
};
