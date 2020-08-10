const imgContainer = document.getElementById('img-container')
const imgText = document.getElementById('img-text')
const imgTitle = document.getElementById('img-title');
const imgP = document.getElementById('img-p');
const imgDate = document.getElementById('img-date');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

const hrLarge = document.getElementById('hr-large');
const hrSmall = document.getElementById('hr-small');

const hrLargeDiv = document.getElementById('hr-large-div');
const hrSmallDiv = document.getElementById('hr-small-div');

//new hr elements created waiting for use
const newHrLarge = document.createElement('hr');
const newHrSmall = document.createElement('hr');

const gallery = [ 
    {
        src: './gallery/image1.jpeg',
        title: "PVCu windows and door installation into outbuilding",
        p: "Removal of old PVCu windows and door, replaced with new.",
        date: "Completed 07/20"
    },
    {
        src: './gallery/image2.jpeg',
        title: "Window Hinges replacement",
        p:     "Damaged hinge replacement.",
        date:  "Completed 07/20"
    },
    {
        src: './gallery/image3.jpeg',
        title: "New PVCu Door installation",
        p: "Removal existing wooden door, replaced with new PVCu.",
        date: "Completed 07/20"
    },
    

];

let i = 0;
    
next.addEventListener('click', () => {
    newSlide(next);
});

prev.addEventListener('click', () => {
    newSlide(prev);
});

// changes slide based on button events
function newSlide(slide) {

    
    if (slide === next && i !== (gallery.length -1) ) {

        i++;

        removal();

        setTimeout(function() {
            imgContainer.style.backgroundImage = `url(${gallery[i].src})`;
        }, 50)

        imgTitle.innerText = gallery[i].title;
        imgP.innerText = gallery[i].p;
        imgDate.innerText = gallery[i].date;

    }

    if (slide === prev && i !== 0) {

        i--;

        removal();

        setTimeout(function() {
            imgContainer.style.backgroundImage = `url(${gallery[i].src})`;
        }, 50)
       
        imgTitle.innerText = gallery[i].title;
        imgP.innerText = gallery[i].p;
        imgDate.innerText = gallery[i].date;

        
    }

    if (i === (gallery.length -1)) {

        next.className = 'btn-1 no-more';
    } else {
        next.className = 'btn-1';
    }

    if (i === 0) {

        prev.className = 'btn-1 no-more';
    } else {
        prev.className = 'btn-1';
    }
}

// triggers the transition on page load
window.addEventListener('load', () => {
    hrLarge.className = "hr-large grow-large";
    hrSmall.className = "hr-small grow-small";
});

// removes existing hr elements / then calls createNew()
function removal() {

    if (hrLarge.parentNode === hrLargeDiv || hrSmall.parentNode === hrSmallDiv ) {

        hrLargeDiv.removeChild(hrLarge);
        hrSmallDiv.removeChild(hrSmall);
        createNew();

    } else {

        hrLargeDiv.removeChild(newHrLarge);
        hrSmallDiv.removeChild(newHrSmall);
        createNew();
    }

 
};

// creates two new hr elements / timeout required to trigger the transition
function createNew() {

    setTimeout(function() {
    newHrLarge.id = 'hr-large';
    newHrLarge.className = "hr-large";
    newHrSmall.id = 'hr-small';
    newHrSmall.className = "hr-small";
    hrLargeDiv.appendChild(newHrLarge);
    hrSmallDiv.appendChild(newHrSmall);
   }, 050)

   setTimeout(function() {
    newHrLarge.className = "hr-large grow-large";
    newHrSmall.className = "hr-small grow-small";
   }, 070)

};

imgContainer.style.backgroundImage = `url(${gallery[0].src})`;
imgTitle.innerText = gallery[i].title;
imgP.innerText = gallery[i].p;
imgDate.innerText = gallery[i].date;
imgContainer.style.backgroundSize = "contain";
imgContainer.style.backgroundRepeat = "no-repeat";
prev.className = 'btn-1 no-more';


