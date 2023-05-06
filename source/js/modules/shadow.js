const shadowValues = document.querySelectorAll('[data-shadow]');

export const initShadow = () => {
  if (shadowValues.length) {
    for (const value of shadowValues) {
      const parent = value.parentNode;
      const shadow = document.createElement('span');
      shadow.classList.add('shadow');
      shadow.innerHTML = value.innerHTML;
      parent.prepend(shadow);
    }
  }
};
