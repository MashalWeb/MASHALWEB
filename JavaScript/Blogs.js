var date = new Date();
var currentDate = date.toLocaleDateString();

const blogPage = document.querySelector(".blogsBox");
let box = document.createElement("div");
function createBlogBox(blogTitle, capText, Category, targrtBlogUrl) {
  box.innerHTML += `
    <div class="singBox">
    <h3><a href="${targrtBlogUrl}" target="_blank">${blogTitle}</a></h3>
    <p>${capText} <a href = "${targrtBlogUrl}">See More</a></p>
    <div class="info">
        <div class="bName"><span>By: Mashal Horara</span></div>

        <div class="bcat"><span>Category: ${Category}</span></div>
    </div>
    </div> `;
  if (blogTitle === " " || capText === " ") {
    console.log("something went wrong");
  } else {
    blogPage.appendChild(box);
  }
}
createBlogBox(
  "How To Activate MS OFFICE 2016 Or Higher Without Product Key",
  "Microsoft Office 2016 is a robust suite of productivity applications that includes Word, Excel, PowerPoint, and many others. To make the most of all the features and functionalities of Microsoft Office 2016, you must activate it using a valid product key. However ",
  "Education, Technology",
  "./install-and-activate-ms-office-2016.html"
);
createBlogBox(
  "test Blog Name",
  "this is test caption text..",
  "test, testing",
  "./install-and-activate-ms-office-2016.html"
);
