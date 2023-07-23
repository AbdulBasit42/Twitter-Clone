function LikeButton(e) {
    if (e.classList.contains("far")) {
        e.classList.add("fas");
        e.classList.remove("far");
        e.style.color = "rgba(220, 24, 44, 0.8)";
    } else {
        e.classList.add("far");
        e.classList.remove("fas");
        e.style.color = "#657786";
    }
}

$("#tweet")

$("#tweet").keydown(function (e) {
    if ($("#tweet").val() != "") {
        $("#tweet-btn").css('opacity', '1');
    } else
        $("#tweet-btn").css('opacity', '0.5');
});

function Retweet(e) {
    console.log(e.style.color);
    if (e.style.color != "rgb(106, 214, 86)") {
        e.style.color = "rgb(106, 214, 86)";
    } else
        e.style.color = "#657786";
}
const toggle = document.getElementById("toggle");
const nav = document.querySelector(".respleft");

toggle.onclick = function () {
    nav.classList.toggle('active');
}
document.onclick = function (e) {
    if (e.target !== toggle) {
        nav.classList.remove('active');
    }
};
document.querySelectorAll("a").forEach((a) => {
    a.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

function toggleButtonText(button) {
    var buttonText = button.querySelector('.button-text');
  
    if (buttonText.textContent === "Follow") {
      buttonText.textContent = "Following";
    } else if (buttonText.textContent === "Following") {
      buttonText.textContent = "Follow";
    }
  }
  

// dark mode

let checkbox = document.getElementById("mode");
let listItems = document.querySelectorAll('ul li');
let rightMostElements = document.querySelectorAll('.rightMost');
let inputBox = document.querySelector('#tweet');
let searchBox = document.querySelector('#searchBox');
let bolded = document.querySelectorAll('.bolded');
let whiteIcon = document.querySelectorAll('.white-icon');
let leftActive = document.querySelectorAll('.left-active');
let listGroupItem = document.querySelectorAll('.list-group-item');
let midTweetBtn = document.querySelectorAll('.mid-tweet-button');
checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        document.body.classList.add('checked');
        rightMostElements.forEach(function (item) {
            item.classList.add('checkedright');
        });        
        // Add class to each <li> element
        listItems.forEach(function (item) {
            item.classList.add('checkedLi');
        });
        //change color of bolded text
        bolded.forEach(function (item) {
            item.style.color = "#fff";
        });
        document.querySelector('.midgapchange').style.backgroundColor = "#000";
        
        whiteIcon.forEach(function (item) {
            item.style.color = "#fff";
        });

        leftActive.forEach(function (item) {
            item.classList.add('left-active-dark');
        });

        listGroupItem.forEach(function (item) {
            item.classList.add('list-group-item-dark');
        });

        midTweetBtn.forEach(function (item) {
            item.style.backgroundColor = "#000";
            item.style.color = "#fff";
            item.style.border = "1px solid #fff";
        });
        //change color of input box
        inputBox.style.backgroundColor = "#000";
        searchBox.style.backgroundColor = "#181c1c";
    } else {
        document.body.classList.remove('checked');
        rightMostElements.forEach(function (item) {
            item.classList.remove('checkedright');
        });

        listItems.forEach(function (item) {
            item.classList.remove('checkedLi');
        });
        bolded.forEach(function (item) {
            item.style.color = "#000";
        });
        whiteIcon.forEach(function (item) {
            item.style.color = "#000";
        });
        document.querySelector('.midgapchange').style.backgroundColor = "#fff";

        leftActive.forEach(function (item) {
            item.classList.remove('left-active-dark');
        });

        listGroupItem.forEach(function (item) {
            item.classList.remove('list-group-item-dark');
        });

        midTweetBtn.forEach(function (item) {
            item.style.backgroundColor = "#fff";
            item.style.color = "#000";
            item.style.border = "1px solid #000";
        });
        inputBox.style.backgroundColor = "#fff";
        searchBox.style.backgroundColor = "#E1E8ED";
    }
});

