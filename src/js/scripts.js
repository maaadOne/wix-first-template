document.addEventListener("DOMContentLoaded", function () {
  //  DOMContentLoaded gives us info from API that all scripts are downloaded

  const fadeElements = document.querySelectorAll(".fade-in");
  //  elements that has "fade-in" class

  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    // IntersectionObserver - is an API that gives us info about the visibility of an element with an observer
    // is used to check if an element is visible or not
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If the element is visible
        entry.target.classList.add("visible");
        // Add class "visible" to the element
        observer.unobserve(entry.target); // Stop observing once it becomes visible
      }
    });
  });

  // Loop each element that has "fade-in" class
  fadeElements.forEach((element) => {
    observer.observe(element);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  //  DOMContentLoaded gives us info from API that all scripts are downloaded

  const fadeElements = document.querySelectorAll(
    ".fade-in-animated-x, .fade-in-animated-y",
  );
  //  elements that has "fade-in" class

  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    // IntersectionObserver - is an API that gives us info about the visibility of an element with an observer
    // is used to check if an element is visible or not
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If the element is visible
        entry.target.classList.add("visible");
        // Add class "visible" to the element
        observer.unobserve(entry.target); // Stop observing once it becomes visible
      }
    });
  });

  // Loop each element that has "fade-in" class
  fadeElements.forEach((element) => {
    observer.observe(element);
  });
});

window.addEventListener("scroll", function () {
  let parallaxElement = document.querySelector(".scroll-x");
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollFactor = scrollTop * 0.2; // Adjust this value for speed
  parallaxElement.style.backgroundPositionX = `-${scrollFactor}px`;
});
