document.addEventListener("DOMContentLoaded", function () {
  const moreLink = document.querySelector(".project__toggle-link");
  const moreText = document.querySelector(".project__more");
  const originalText = moreText.textContent;

  moreLink.addEventListener("mouseenter", function () {
    // Create a span for dots if it doesn't exist
    let dotsSpan = moreLink.querySelector(".dots-animation");
    if (!dotsSpan) {
      dotsSpan = document.createElement("span");
      dotsSpan.className = "dots-animation";
      dotsSpan.style.position = "absolute";
      dotsSpan.style.left = "100%";
      dotsSpan.style.marginLeft = "5px";
      moreText.style.position = "relative";
      moreText.appendChild(dotsSpan);
    }

    let dotCount = 1;
    // Start the animation interval
    const dotInterval = setInterval(function () {
      let dots = ".".repeat(dotCount);
      dotsSpan.textContent = dots;

      dotCount = (dotCount % 3) + 1;
    }, 500);

    // Store the interval ID to clear it later
    moreLink._dotInterval = dotInterval;
  });

  moreLink.addEventListener("mouseleave", function () {
    // Clear the animation interval
    clearInterval(moreLink._dotInterval);

    // Remove or hide the dots span
    const dotsSpan = moreLink.querySelector(".dots-animation");
    if (dotsSpan) {
      dotsSpan.textContent = "";
    }
  });
});
