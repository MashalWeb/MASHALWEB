var date = new Date;
var currentDate = date.toLocaleDateString();

const blogPage = document.querySelector(".blogsBox");
let blogtitle = "blog title here..";
let imgUrl = "../images/Facebook.png";
let capText = "some text here some text here some text here some text here some text here some text here some text here some text here some text here"
let cat = "entertiement";
let box = document.createElement("div");
function createBlogBox(blogTitle, imgUrl, capText, Category, targrtBlogUrl){
    
    box.classList.add("singBox");
    box.innerHTML = `
    <h3><a href="${targrtBlogUrl}" target="_blank">${blogTitle}</a></h3>
    <img src="${imgUrl}">
    <p>${capText} <a href = "${targrtBlogUrl}">See More</a></p>
    <div class="info">
        <div class="bName"><span>By: Mashal Horara</span></div>
        <div class="bDate"><span>Date: ${currentDate}</span></div>
        <div class="bcat"><span>Category: ${Category}</span></div>
    </div> `;
    if(blogTitle === " " || imgUrl === " " || capText === " "){
        console.log("something went wrong");
    }
    else{
        blogPage.appendChild(box);
    }
    
}
createBlogBox("How To Activate MS OFFICE 2016 Or Higher Without Product Key", 'https://images.wootechy.com/article/activate-Microsoft-Office-2016-Pro-Plus-for-free.jpg','Microsoft Office 2016 is a robust suite of productivity applications that includes Word, Excel, PowerPoint, and many others. To make the most of all the features and functionalities of Microsoft Office 2016, you must activate it using a valid product key. However ','Education, Technology', './install-and-activate-ms-office-2016.html');