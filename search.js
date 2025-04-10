const suggestions = [
    // your suggestions array here
    "html", "css", "javascript", "python", "frontend-development", "backend development", "Channel", "CodingLab", "CodingNepal", "YouTube", "management",
    "YouTuber", "YouTube Channel", "Blogger", "Bollywood", "Blockchain", "web development", "diwakar chaudhary", "code with harry", "cimage",
    "Vlogger", "Vechiles","previous year question",
    "Facebook", "Freelancer", "Facebook Page",
    "Designer", "Developer",
    "Web Designer", "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?"
];

// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");

// Handle the search based on user input or selected suggestion
function handleSearch(query) {
    let webLink;

    if (query === "Patna") {
        window.location = "patna.html";
    } else if (query === "patna") {
        window.location = "patna.html";
    } else if (query === "Banaras") {
        window.location = "banaras.html";
    } else if (query === "banaras") {
        window.location = "banaras.html";
    } else {
        webLink = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
}

// When user presses a key
inputBox.onkeyup = (e) => {
    let userData = e.target.value; // user-entered data
    let emptyArray = [];

    if (userData) {
        emptyArray = suggestions.filter((data) => {
            return data.toLowerCase().startsWith(userData.toLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); // show autocomplete box
        showSuggestions(emptyArray);

        let allList = suggBox.querySelectorAll("li");
        allList.forEach(item => {
            item.onclick = () => select(item);
        });
    } else {
        searchWrapper.classList.remove("active"); // hide autocomplete box
    }
};

// Handle click on suggestion
function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    handleSearch(selectData);
    searchWrapper.classList.remove("active");
}

// Show suggestions in the dropdown
function showSuggestions(list) {
    let listData;
    if (!list.length) {
        let userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

// Add event listener to the search icon
icon.onclick = () => {
    handleSearch(inputBox.value);
};
