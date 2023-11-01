// // blur.js

// function initializeBlurEffect() {
//   // Define the options for the Intersection Observer
//   const options = {
//     root: null, // Use the viewport as the root
//     rootMargin: "0px", // No margin
//     threshold: 0, // When the element enters the viewport
//   };

//   // Callback function to handle intersection changes
//   function handleIntersection(entries, observer) {
//     entries.forEach((entry) => {
//       const section = entry.target;
//       if (!entry.isIntersecting) {
//         section.classList.add("blur-effect");
//       } else {
//         section.classList.remove("blur-effect");
//       }
//     });
//   }

//   // Create the Intersection Observer
//   const observer = new IntersectionObserver(handleIntersection, options);

//   // Select the sections you want to apply the blur effect to
//   const sections = document.querySelectorAll(".blur-effect");

//   // Observe each section
//   sections.forEach((section) => {
//     observer.observe(section);
//   });
// }

// // Add an event listener to run the initialization function when the page is fully loaded
// window.addEventListener("load", initializeBlurEffect);

// function initializeBlurEffect() {
//   // Define the options for the Intersection Observer
//   const options = {
//     root: null, // Use the viewport as the root
//     rootMargin: "0px", // No margin
//     threshold: 0.5, // When 50% of the element is in the viewport
//   };

//   // Function to check if the screen width is above a certain threshold
//   function isLargeScreen() {
//     return window.innerWidth > 768; // Adjust this value as needed
//   }

//   // Callback function to handle intersection changes
//   function handleIntersection(entries, observer) {
//     entries.forEach((entry) => {
//       const section = entry.target;
//       if (isLargeScreen() && entry.isIntersecting) {
//         section.classList.remove("blur-effect");
//       } else {
//         section.classList.add("blur-effect");
//       }
//     });
//   }

//   // Create the Intersection Observer
//   const observer = new IntersectionObserver(handleIntersection, options);

//   // Select the sections you want to apply the blur effect to
//   const sections = document.querySelectorAll(".blur-effect");

//   // Observe each section
//   sections.forEach((section) => {
//     observer.observe(section);
//   });

//   // Function to handle scroll events and update blur effect
//   function handleScroll() {
//     sections.forEach((section) => {
//       if (
//         isLargeScreen() &&
//         section.getBoundingClientRect().top < window.innerHeight / 2
//       ) {
//         section.classList.add("blur-effect");
//       } else {
//         section.classList.remove("blur-effect");
//       }
//     });
//   }

//   // Add an event listener to run the scroll handler
//   window.addEventListener("scroll", handleScroll);

//   // Trigger the initial check
//   handleScroll();
// }

// // Add an event listener to run the initialization function when the page is fully loaded
// window.addEventListener("load", initializeBlurEffect);
// // blur.js

// function initializeBlurEffect() {
//   // Define the options for the Intersection Observer
//   const options = {
//     root: null, // Use the viewport as the root
//     rootMargin: "0px", // No margin
//     threshold: 0.5, // When 50% of the element is in the viewport
//   };

//   // Function to check if the screen width is above a certain threshold
//   function isLargeScreen() {
//     return window.innerWidth > 768; // Adjust this value as needed
//   }

//   // Callback function to handle intersection changes
//   function handleIntersection(entries, observer) {
//     entries.forEach((entry) => {
//       const section = entry.target;
//       if (isLargeScreen() && entry.isIntersecting) {
//         section.classList.remove("blur-effect");
//       } else {
//         section.classList.add("blur-effect");
//       }
//     });
//   }

//   // Create the Intersection Observer
//   const observer = new IntersectionObserver(handleIntersection, options);

//   // Select the sections you want to apply the blur effect to
//   const sections = document.querySelectorAll(".blur-effect");

//   // Observe each section
//   sections.forEach((section) => {
//     observer.observe(section);
//   });

//   // Function to handle scroll events and update blur effect
//   function handleScroll() {
//     sections.forEach((section) => {
//       if (
//         isLargeScreen() &&
//         section.getBoundingClientRect().top < window.innerHeight / 2
//       ) {
//         section.classList.add("blur-effect");
//       } else {
//         section.classList.remove("blur-effect");
//       }
//     });
//   }

//   // Add an event listener to run the scroll handler
//   window.addEventListener("scroll", handleScroll);
// }

// // Add an event listener to run the initialization function when the page is fully loaded
// window.addEventListener("load", initializeBlurEffect);
