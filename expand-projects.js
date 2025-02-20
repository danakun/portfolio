const additionalProjects = [
  {
    number: "05",
    imageUrl: "./images/project3.png",
    videoUrl: "./images/mesto.mp4",
    title: "Places",
    description:
      "HTML, CSS, JS, React, Express Places is a social network where users can share photos of their favorite places. This project demonstrates various front-end techniques, including flexbox layout, CSS grid, working with APIs, and event handling. I connected the database, designed API schemas, and crafted resource models. Implemented robust logging,authentication, and authorization on the server. Scamlessly integrated React components and transformed the markup into React format.",
    githubLink: "https://github.com/danakun/react-mesto-api-full-gha",
    demoLink: "https://danakun-mesto-react.netlify.app/",
  },
  {
    number: "06",
    imageUrl: "./images/project4.png",
    videoUrl: "./images/jiffy-demo.mp4",
    title: "Jiffy",
    description:
      "HTML, CSS, JavaScript, API. Jiffy is a simple GIF searcher that uses the Giphy API. This project demonstrates various front-end techniques, including CSS grid layout, working with APIs, and event handling. You can type in a search term and press enter to see the results.",
    githubLink: "https://github.com/danakun/jiffy-api",
    demoLink: "https://danakun.github.io/jiffy-api/",
  },
];

// Function to create a project HTML structure with video hover effect
function createProjectHTML(project) {
  return `
    <article class="project">
      <span class="project__number big-header">${project.number}</span>
      <a class="project-grid-link" href="${project.demoLink}" target="blank">
        <div class="media-container">
          <img
            class="project__image"
            src="${project.imageUrl}"
            alt="Photo of project ${project.number}."
          />
          <video
            class="project__video"
            src="${project.videoUrl}"
            muted
            loop
            playsinline
            autoplay
          ></video>
        </div>
      </a>
      <div class="project__text">
        <h3 class="project__title regular-header">${project.title}</h3>
        <p class="project__description text">
          ${project.description}
        </p>
        <a href="${project.githubLink}" class="project__link" target="blank">Github</a>
      </div>
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleLink = document.querySelector(".project__toggle-link");
  const toggleText = toggleLink.querySelector(".project__more");
  const projectList = document.querySelector(".project-grid__list");
  const toggleContainer = document.querySelector(".project__toggle");

  let isExpanded = false;

  function createProjectHTML(project) {
    return `
      <li class="project-grid__item new-item">
        <article class="project">
          <span class="project__number big-header">${project.number}</span>
          <a class="project-grid-link" href="${
            project.demoLink
          }" target="blank">
            <div class="media-container">
              <img
                class="project__image"
                src="${project.imageUrl}"
                alt="Photo of project ${project.number}."
              />
              ${
                project.videoUrl
                  ? `
                <video
                  class="project__video"
                  src="${project.videoUrl}"
                  muted
                  loop
                  playsinline
                  autoplay
                ></video>
              `
                  : ""
              }
            </div>
          </a>
          <div class="project__text">
            <h3 class="project__title regular-header">${project.title}</h3>
            <p class="project__description text">
              ${project.description}
            </p>
            <a href="${
              project.githubLink
            }" class="project__link" target="blank">Github</a>
          </div>
        </article>
      </li>
    `;
  }

  function toggleProjects(e) {
    e.preventDefault();

    if (!isExpanded) {
      // Insert additional projects before the toggle container
      additionalProjects.forEach((project) => {
        const projectHTML = createProjectHTML(project);
        toggleContainer.insertAdjacentHTML("beforebegin", projectHTML);
      });
      toggleText.textContent = "LESS";
    } else {
      // Remove added projects
      const addedItems = document.querySelectorAll(
        ".project-grid__item.new-item"
      );
      addedItems.forEach((item) => item.remove());
      toggleText.textContent = "MORE";
    }

    isExpanded = !isExpanded;
  }

  toggleLink.addEventListener("click", toggleProjects);
});

// // Additional projects data
// const additionalProjects = [
//   {
//     number: "05",
//     imageUrl: "./images/project-placeholder.jpg",
//     title: "Travel App",
//     description:
//       "HTML, CSS, JavaScript, Weather API, Travel API. A web application that helps users plan their trips by providing weather forecasts and attractions for their destination.",
//     githubLink: "https://github.com/danakun/travel-app",
//   },
//   {
//     number: "06",
//     imageUrl: "./images/project-placeholder.jpg",
//     title: "Recipe Finder",
//     description:
//       "HTML, CSS, React, Food API. An application that allows users to search for recipes based on ingredients they have at home.",
//     githubLink: "https://github.com/danakun/recipe-finder",
//   },
// ];

// // Function to create a project HTML structure
// function createProjectHTML(project) {
//   return `
//     <article class="project">
//       <span class="project__number big-header">${project.number}</span>
//       <a class="project-grid-link" href="${project.githubLink}" target="blank">
//         <img
//           class="project__image"
//           src="${project.imageUrl}"
//           alt="Photo of project ${project.number}."
//         />
//       </a>
//       <div class="project__text">
//         <h3 class="project__title regular-header">${project.title}</h3>
//         <p class="project__description text">
//           ${project.description}
//         </p>
//         <a href="${project.githubLink}" class="project__link" target="blank">Github</a>
//       </div>
//     </article>
//   `;
// }

// document.addEventListener("DOMContentLoaded", function () {
//   // Select toggle link and project list
//   const toggleLink = document.querySelector(".project__toggle-link");
//   const toggleText = toggleLink.querySelector(".project__number");
//   const projectList = document.querySelector(".project-grid__list");
//   const moreItem = document.querySelector(".project-grid__item:last-child");

//   let isExpanded = false;

//   // Simple toggle function
//   function toggleProjects() {
//     if (!isExpanded) {
//       // Show more projects
//       additionalProjects.forEach((project) => {
//         const newItem = document.createElement("li");
//         newItem.className = "project-grid__item new-item";
//         newItem.innerHTML = createProjectHTML(project);
//         projectList.insertBefore(newItem, moreItem);
//       });

//       // Change text to "LESS..."
//       toggleText.textContent = "LESS...";
//       isExpanded = true;
//     } else {
//       // Remove added projects
//       const addedItems = document.querySelectorAll(
//         ".project-grid__item.new-item"
//       );
//       addedItems.forEach((item) => projectList.removeChild(item));

//       // Change text back to "MORE..."
//       toggleText.textContent = "MORE...";
//       isExpanded = false;
//     }
//   }

//   // Add click event to toggle link
//   toggleLink.addEventListener("click", toggleProjects);
// });
