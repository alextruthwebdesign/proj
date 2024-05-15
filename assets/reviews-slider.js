const reviewsSliders = document?.querySelectorAll(".reviews-slider");

reviewsSliders?.forEach((item) => {
  const sliderEl = item?.querySelector(".keen-slider");
  const slider = new KeenSlider(sliderEl);

  function handleResize() {
    if (window?.innerWidth <= 420) {
      slider.update({
        slides: { perView: 1, spacing: 20 },
      });
    } else if (window?.innerWidth <= 640) {
      slider.update({
        slides: { perView: window.innerWidth / 400, spacing: 20 },
      });
    } else if (window?.innerWidth <= 900) {
      slider.update({
        slides: { perView: window.innerWidth / 500, spacing: 20 },
      });
    } else if (window?.innerWidth <= 1200) {
      slider.update({
        slides: { perView: window.innerWidth / 600, spacing: 20 },
      });
    } else {
      slider.update({
        slides: { perView: window.innerWidth / 780, spacing: 30 },
      });
    }
  }
  handleResize();
  window.addEventListener("resize", handleResize);
  window.addEventListener("load", handleResize);
});
