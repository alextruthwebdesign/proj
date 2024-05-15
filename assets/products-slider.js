const productsSliders = document?.querySelectorAll(".products-slider");

productsSliders?.forEach((item) => {
  const sliderEl = item?.querySelector(".keen-slider");
  const slider = new KeenSlider(sliderEl);

  const productNextBtn = item?.querySelector(".slider-arrows .arrow-right");
  const productPrevBtn = item?.querySelector(".slider-arrows .arrow-left");

  productNextBtn?.addEventListener("click", function () {
    slider?.next();
  });
  productPrevBtn?.addEventListener("click", function () {
    slider?.prev();
  });

  function handleResize() {
    if (window?.innerWidth <= 420) {
      slider.update({
        slides: { perView: 1, spacing: 20 },
      });
    } else if (window?.innerWidth <= 640) {
      slider.update({
        slides: { perView: window.innerWidth / 350, spacing: 20 },
      });
    } else if (window?.innerWidth <= 1040) {
      slider.update({
        slides: { perView: window.innerWidth / 400, spacing: 20 },
      });
    } else if (window?.innerWidth <= 1200) {
      slider.update({
        slides: { perView: window.innerWidth / 400, spacing: 20 },
      });
    } else {
      slider.update({
        slides: { perView: window.innerWidth / 685, spacing: 30 },
      });
    }
  }
  handleResize();
  window.addEventListener("resize", handleResize);
  window.addEventListener("load", handleResize);
});
