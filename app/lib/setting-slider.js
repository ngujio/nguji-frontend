function Slider(links, pathname) {
  const nav = document.querySelector(".settingsNav");
  const children = nav.children;
  const slider = children[0];
  const index = links.findIndex(([_, href]) => href === pathname);

  slider.style.left = `0px`;

  Slider.prototype.moveSlider = () => {
    if (index >= 0) {
      const navLeft = nav.getBoundingClientRect().left;
      const activeLink = children[index + 1].getBoundingClientRect();
      slider.style.width = `${activeLink.width}px`;
      slider.style.left = `${activeLink.left - navLeft}px`;
    } else {
      slider.style.width = `0px`;
    }
  };
}

export default Slider;
