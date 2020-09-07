const scroll = document.getElementById('scroll');

const services = document.querySelectorAll('#services');
const dropDown = document.querySelectorAll('#drop-down-list');

const navMenu = document.getElementById('trigger');
const navInner = document.getElementsByClassName('nav-inner-style');



// drop down menu control

for (let i = 0; i < services.length; i++) {

    services[i].addEventListener('click', () => {
        dropDown[i].style.visibility = 'visible';
    
    })

// closes drop down list when not-target node is clicked
document.addEventListener('click', node => {
    let clickOut = true;

    node.path.forEach(item => {
      if (clickOut === false)
        return;

      if (item.className === 'hover drop-down')
        clickOut = false;
    });

    if (clickOut === true)
    dropDown[i].style.visibility = 'hidden';
  });

};

// mobile navbar slide

let slideUp = (target, duration) => {

    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';

    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.style.overflow = 'hidden';

    
        window.setTimeout( () => {
            target.style.display = 'none';
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, 200);

};


let slideDown = (target, duration) => {

    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') {
        display = 'block';
    }
    target.style.display = display;

    let height = target.offsetHeight;
    target.style.height = 0;
    target.style.paddingTop = 0;       
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.style.overflow = 'hidden';

    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');

        window.setTimeout( () => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, 200);
    
};

let slideToggle = (target, duration) => {
        if (window.getComputedStyle(target).display === 'none') {
            return slideDown(target, duration);
        } else {
            return slideUp(target, duration);
        }
};

window.addEventListener('load', () => {

    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.style.overflow = 'hidden';

    window.setTimeout( () => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, 200);
})


// nav burger button
navMenu.addEventListener('mouseover', () => {
    for (let i=0; i < navInner.length; i++) {
        navInner[i].style.background = 'rgba(207, 0, 15, 1)';
    }
    
});

navMenu.addEventListener('mouseout', () => {
    for (let i=0; i < navInner.length; i++) {
        navInner[i].style.background = 'white';
    }
});


// google maps
function initMap() {
    var poole = {lat: 50.715043, lng: -1.987239};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 9, center: poole});

    var marker = new google.maps.Marker({position: poole, map: map});
};




