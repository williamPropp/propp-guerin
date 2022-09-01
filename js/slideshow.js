const carouselSelectedIcon = "&#9679;";
const carouselUnselectedIcon = "&#9675;";

const slideMap = [
    {
        name: "penthouse",
        title: "penthouse SF",
        description: "this is the penthouse",
        date: "01122002",
    },
    {
        name: "mc2restaurant",
        title: "MC2 Restaurant",
        description: "this is the restaurant",
        date: "01122008",
    },
    {
        name: "restorationhardware",
        title: "Restoration Hardware",
        description: "this is restoration hardware project",
        date: "01122009",
    },
    {
        name: "jonesday",
        title: "Jones Day Project",
        description: "this is the jonesday project",
        date: "11322012",
    },
]

var slideIndex = 0;

startup();


function startup() {
    createCarousel();
    showSlide(slideIndex);
}

function slideScroll(n) {
    slideIndex += n;
    if (slideIndex >= slideMap.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slideMap.length - 1;
    }
    showSlide(slideIndex);
}

function showSlide(n) {    
    let imageURLprefix = "url(\"../images/slides/"
    let newSlideName = slideMap[n].name;
    let newSlideTitle = slideMap[n].title;
    let newSlideDescription = slideMap[n].description;
    let newSlideDate = slideMap[n].date;

    // document.getElementById("slideImage").src = imageURLprefix + newSlideName + ".jpg";
    document.getElementById("slideshow").style["background-image"] = imageURLprefix + newSlideName + ".jpg\")";
    // document.getElementById("slideImage").alt = newSlideTitle;
    document.getElementById("slideshow").style["background-image"].alt = newSlideTitle;
    document.getElementById("slideTitle").innerHTML = newSlideTitle;
    document.getElementById("slideDescription").innerHTML = newSlideDescription;
    document.getElementById("slideDate").innerHTML = newSlideDate;
    updateCarousel(n);
}

// function showSlide(n) {
//     let newSlideTitle = slideMap[n].title;
//     let newSlideDescription = slideMap[n].description;
//     let newSlideDate = slideMap[n].date;

//     let slideArray = []
//     for(let i = 0; i < slideMap.length ; i++) {
//         let slide = document.getElementById("slide-" + i);
//         slideArray.push(slide);
//     }
//     slideArray.forEach(element => { element.style.display = "none";});
//     slideArray[n].style.display = "block";

//     document.getElementById("slideTitle").innerHTML = newSlideTitle;
//     document.getElementById("slideDescription").innerHTML = newSlideDescription;
//     document.getElementById("slideDate").innerHTML = newSlideDate;
//     updateCarousel(n);
// }

// function createSlide(slideID) {
//     const imageURLprefix = "../images/slides/";
//     const imageURLsuffix = ".jpg";
//     const newSlideName = slideMap[slideID].name;

//     const newSlide = "<img id=\"slide-"+ slideID +"\" class=\"slide\" src=\"" + imageURLprefix + newSlideName + imageURLsuffix + "\" alt=\"" + newSlideName + " project\"></img>";

//     const slideshow = document.getElementById("slideshow");
//     slideshow.innerHTML += newSlide;
// }

function createCarouselButton(buttonID) {
    const newButton = "<button id=\"dot-" + buttonID + "\" class=\"carousel-buttons\" onclick=\"showSlide(" + buttonID + ")\">" + carouselUnselectedIcon + "</button>";

    const carouselBullets = document.getElementById("carousel-bullets");
    carouselBullets.innerHTML += newButton;
}

function createCarousel() {
    if(slideMap.length <= 1) {
        return;
    } else {
        for(let i = 1; i < slideMap.length; i++) {
            // createSlide(i);
            createCarouselButton(i);
        }
    }
}

function updateCarousel(n) {
    for(let i = 0; i < slideMap.length; i++) {
        document.getElementById("dot-" + i).innerHTML = carouselUnselectedIcon;
    }
    document.getElementById("dot-" + n).innerHTML = carouselSelectedIcon;
}