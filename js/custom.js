// insert waves effect
(function () {
  const elements = document.getElementsByClassName(
    "first-screen-container flex-center"
  );
  if (elements.length == 0) return;

  elements[0].lastElementChild.insertAdjacentHTML(
    "afterend",
    `
    <section class="main-hero-waves-area waves-area">
      <svg class="waves-svg" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352Z"></path></defs>
        <g class="parallax">
          <use href="#gentle-wave" x="48" y="0"></use>
          <use href="#gentle-wave" x="48" y="3"></use>
          <use href="#gentle-wave" x="48" y="5"></use>
          <use href="#gentle-wave" x="48" y="7"></use>
        </g>
      </svg>
    </section>
    `
  );
})();
