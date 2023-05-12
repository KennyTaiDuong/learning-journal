import { posts } from "./data.js";

const viewMoreBtn = document.getElementById("more-btn");
const viewMoreBtnContainer = document.getElementById("more-btn-container");
const blogContainer = document.getElementById("blog-container");
let count = posts.length;

viewMoreBtn.addEventListener("click", function () {
  viewMore();
});

function createBlogHTML(num) {
  let blogString = "";
  for (let i = 0; i < num; i++) {
    blogString += `
        <div class="blog-card">
            <img src=${posts[i].image} class="blog-image">
            <div class="blog-desc">
                <h3 class="blog-title heavy">${posts[i].title}</h3>
                <p class="blog-subtitle gray-text">${posts[i].subtitle}</p>
                <p class="blog-date">${posts[i].date}</p>
            </div>
        </div>`;
  }
  blogContainer.innerHTML = blogString;
}

function viewMore() {
  count += 3;
  createBlogHTML(count);
  if (count === 6) {
    viewMoreBtnContainer.style.display = "none";
  }
}

createBlogHTML(count);
