//toggle search
const search = document.querySelector(".fa-search");
const input = document.querySelector(".input_text");

search.addEventListener('click', function() {
    input.classList.toggle("toggle_search");
    input.classList.toggle("input_text");
});

// moblie navigation
const menu = document.querySelector(".fa-bars");
const nav_menu = document.querySelector(".header-nav");

menu.addEventListener('click', function() {
    nav_menu.classList.toggle("header-nav-display");
});

//comment post
message = document.querySelector(".message");
comment = document.getElementById("comment-post");
submit = document.querySelector(".submit");
commentName = document.querySelector(".comment_name");
commentEmail = document.querySelector(".comment_email");
commentCount = document.querySelector(".comment-count");



submit.addEventListener("click", () => {
    //render comment post
    commentPost = document.createElement("p");
    commentPost.classList.add("comment-message")
    commentPost.innerHTML = message.value;

    nameElement = document.createElement("span");
    nameElement.classList.add("comment-detile");
    nameElement.innerHTML = commentName.value;

    //display date in a the comment
    const commentDate = new Date();
    currentDate = document.createElement("span");
    currentDate.classList.add("comment-detile");
    currentDate.innerHTML = commentDate;
    if(message.value){
        comment.appendChild(commentPost);
        comment.appendChild(nameElement);
        comment.appendChild(currentDate);
        commentCount.innerHTML++
        comment.style.backgroundColor = "#5c0404";
    }
    commentName.value = "";
    commentEmail.value = "";
    message.value = "";
});
