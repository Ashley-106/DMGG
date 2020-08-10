const reviewTitle = document.getElementById('review-title');
const reviewP = document.getElementById('review-p');
const reviewDate = document.getElementById('review-date');


const next = document.getElementById('next');
const prev = document.getElementById('prev');

const hrLarge = document.getElementById('hr-large');
const hrSmall = document.getElementById('hr-small');

const hrLargeDiv = document.getElementById('hr-large-div');
const hrSmallDiv = document.getElementById('hr-small-div');

//new hr elements created waiting for use
const newHrLarge = document.createElement('hr');
const newHrSmall = document.createElement('hr');


const reviews = [
    {
        title: "New upvc door fitted and also a replacement window glass",
        p: "have known Dave for many years and his attention to detail and quality workmanship is second to none. I would not use anyone else for glazing , windows , doors as I totally trust his work.",
        date: "Poole 07/20"
    },
    {
        title: "Re-glazed a window in a patio door",
        p: "Excellent service from Dave. Reasonable price. Did a great job. Prompt and friendly in his approach. Would highly recommend.",
        date: "Poole 06/20"
    },
    {
        title: "Problem with UPVC door and window fitted by another company",
        p: "Kept us up to date with time of arrival. Extremely pleasant person. Kept us fully informed.",
        date: "Poole 06/20"
    },
    {
        title: "Back door window replaced",
        p: "Back door window replaced",
        date: "Poole 05/20"
    },
    {
        title: "Front door adjustment and general window/door MOT",
        p: "Friendly honest service, even showed me tips to help myself if needing small adjustments in future which was really helpful. Will be my go to guy for Window/Doors and would recommend to family and friends.",
        date: "Poole 05/20"
    },
    {
        title: "Replacement of failed Double glazed units ",
        p: "Very knowledgeable of requirements bearing in mind units are 50 years old. . Excellent results overall",
        date: "Poole 05/19"
    },
    {
        title: "Replace 4 large double - glazed window",
        p: "We cannot fault this company. The product, service, finish and quality was excellent. We highly recommend them.",
        date: "Bournemouth 04/19"
    }
];


let i = 0;
next.addEventListener('click', () => {

    newReview(next);
});

prev.addEventListener('click', () => {
    newReview(prev);
});

//changes slides based on button events
function newReview(review) {

    if(review === next  && i !== (reviews.length -1)) {

        i++;
        reviewTitle.innerText = reviews[i].title;
        reviewP.innerText = reviews[i].p;
        reviewTitle.innerText = reviews[i].title;

        removal()

    }

    if (review === prev && i !== 0) {

        i--;
        reviewTitle.innerText = reviews[i].title;
        reviewP.innerText = reviews[i].p;
        reviewTitle.innerText = reviews[i].title;
        
        removal()
        
    }

    // greys out buttons when end/begining
    if (i === (reviews.length -1)) {
        next.className = "btn-1 no-more";
    } else {
        next.className = "btn-1";
    }

    if (i === 0) {
        prev.className = "btn-1 no-more";
    } else {
        prev.className = "btn-1";
    }
};
    

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


//Sets the first review
reviewTitle.innerText = reviews[0].title;
reviewP.innerText = reviews[0].p;
reviewDate.innerText = reviews[0].date;

prev.className = "btn-1 no-more";

