// ---- Preloader ----
document.body.style.overflow = 'hidden';

let animatePreloaderImage = setInterval(function () {

    let loadingString = document.querySelector('.preloader__text');
    let image = document.querySelector('.preloader__img_wrapper');
    if (image.style.backgroundPosition === 'center top') {
        image.style.backgroundPosition = 'center center';
        loadingString.innerHTML = 'Loading..';
    } else if (image.style.backgroundPosition === 'center center') {
        image.style.backgroundPosition = 'center bottom';
        loadingString.innerHTML = 'Loading...';
    } else if (image.style.backgroundPosition = 'center bottom') {
        image.style.backgroundPosition = 'center top';
        loadingString.innerHTML = 'Loading.';
    }
}, 280)

let countPercentInPreloader = setInterval(function () {
    let loadPercent = document.querySelector('.load_perc');

    loadPercent.innerHTML = Number(loadPercent.innerHTML) + 4;
    if (loadPercent.innerHTML === '100') {
        clearInterval(countPercentInPreloader);
    }
}, 30)
// Уйзнай за шрифт

window.onload = function () {
    let preloader = document.querySelector('.preloader');

    setTimeout(function () {
        preloader.classList.add('done');
        document.body.style.overflow = '';
        clearInterval(animatePreloaderImage);
    }, 1000)
}


// ---- Parallax Title ----
VanillaTilt.init(document.querySelector('.title__wrapper'), {
    max: 10,
    speed: 4000,
});

// ---- Mouse Cursor ----
let mouseCursor = document.querySelector('.cursor');
let logo = document.querySelectorAll('.logo');
let navLink = document.querySelectorAll('.nav__link');
let nav = document.querySelectorAll('.nav__menu');


window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

function cursorHover(element) {
    element.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor_white');
    })
    element.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor_white');
    })
}

logo.forEach(element => {
    cursorHover(element);
});


navLink.forEach(element => {
    element.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor_nav');
        mouseCursor.insertAdjacentHTML('afterbegin', '<p id="cursor_text" class="cursor_text">Contact</p>');
    })

    element.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor_nav');
        mouseCursor.firstChild.remove();
    })
});

nav.forEach(element => {
    element.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor_nav');
        if (mouseCursor.hasChildNodes()) {
            mouseCursor.firstChild.remove();
            mouseCursor.insertAdjacentHTML('afterbegin', '<p id="cursor_text" class="cursor_text">Open</p>');
        } else {
            mouseCursor.insertAdjacentHTML('afterbegin', '<p id="cursor_text" class="cursor_text">Open</p>');
        }
    })

    element.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor_nav');
        mouseCursor.firstChild.remove();
    })
});

// ---- Counter -----
let counter = document.querySelector('.main__counter');
let counterUp = counter.innerHTML;

setInterval(() => {
    counterUp = (counterUp * 1) + 11;
    counter.innerHTML = counterUp.toString().charAt(0) + '.' + counterUp.toString().substring(1, 4) + '.' + counterUp.toString().substring(4, 7) + '.' + counterUp.toString().substring(7);
}, 90);


// ---- Parallax Scroll ----
window.addEventListener('scroll', () => {
    let topScroll = window.pageYOffset;
    let darkBg = document.querySelectorAll('.dark-bg');

    if (topScroll > 200) {
        darkBg[0].style.opacity = `${(topScroll-200)/60*0.1}`;
        darkBg[0].style.zIndex = '20';
    } else {
        darkBg[0].style.zIndex = '';
    }

    if (topScroll > 1177) {
        darkBg[1].parentNode.style.position = 'sticky';
        darkBg[1].parentNode.style.top = '-370px';
        darkBg[1].style.opacity = `${(topScroll-1177)/78*0.1}`;
        darkBg[1].style.zIndex = '31';
    } else {
        darkBg[1].style.zIndex = '';
    }

    if (topScroll > 2100) {
        darkBg[2].style.opacity = `${(topScroll-2100)/68*0.1}`;
        darkBg[2].style.zIndex = '2';
    } else {
        darkBg[2].style.zIndex = '-1';
    }
})

// ---- Section Clients Hover ----

let imgHovered = document.querySelectorAll('.clients-img__wrapper');

imgHovered.forEach(element => {
    element.addEventListener('mouseover', () => {
        cursorHover(element);
        element.insertAdjacentHTML('afterbegin', '<p class="clients-hover__title">Channel Operation and management</p>');
        element.insertAdjacentHTML('afterbegin', '<p class="clients-hover__text">8.2M +</p>');
        element.insertAdjacentHTML('afterbegin', '<img src="img/section/clients-list_hover.png" class="clients-hover__img">')
        element.insertAdjacentHTML('afterbegin', '<a class="clients-hover__link">Video Link <i class="fas fa-arrow-up"></i></a>')
    })

    element.addEventListener('mouseleave', () => {
        while (element.children.length > 1) {
            element.removeChild(element.firstChild);
        }
    })
})

// ---- Work List Hover and OnClick ----
let workListButton = document.querySelectorAll('.work-list__img-wrapper');
let workListButtons = document.querySelector('.work-list__buttons');
let categoryImg = document.querySelector('.category__img');
let categoryTitle = document.querySelector('.category__title');


// let lightsWrapper = document.querySelector('.work-list__category');
// let lights = document.querySelectorAll('.work-list__light');
// lightsWrapper.addEventListener('mousemove', function (e) {
//     let width = screen.width;
//     let height = screen.height;
//     let x = e.pageX / width;
//     let y = e.pageY / height;

//     lights.forEach(element => {
//         element.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
//     })
// })

function moveLight() {
    let lightsWrapper = document.querySelector('.work-list__category');
    let lights = document.querySelectorAll('.work-list__light');

    let lightTl = lights[0].cloneNode();
    let lightTr = lights[1].cloneNode();
    let lightBl = lights[2].cloneNode();

    lightTl.classList.remove('light-tl_active');
    lightTr.classList.remove('light-tr_active');
    lightBl.classList.remove('light-bl_active');

    lights[0].parentNode.removeChild(lights[0]);
    lights[1].parentNode.removeChild(lights[1]);
    lights[2].parentNode.removeChild(lights[2]);

    lightsWrapper.appendChild(lightTl);
    lightsWrapper.appendChild(lightTr);
    lightsWrapper.appendChild(lightBl);

    lightTl.classList.add('light-tl_active');
    lightTr.classList.add('light-tr_active');
    lightBl.classList.add('light-bl_active');
}



workListButtons.onclick = function (e) {
    if (e.target.id === 'wl1') {
        categoryImg.src = 'img/work-list/work-list_gear-big.png';
        categoryTitle.innerHTML = 'Channel Operation and Management';
        categoryTitle.style.maxWidth = '362px';

        workListButton.forEach(element => {
            element.firstElementChild.classList.remove('button_red');
            element.style.backgroundPosition = '0 0';
        })

        e.target.firstElementChild.classList.add('button_red');
        e.target.style.backgroundPosition = '0 -173px';
        moveLight();

    } else if (e.target.id === 'wl2') {
        categoryImg.src = 'img/work-list/work-list_star-big.png';
        categoryTitle.innerHTML = 'Creative Services for Infuencers';
        categoryTitle.style.maxWidth = '362px';


        workListButton.forEach(element => {
            element.firstElementChild.classList.remove('button_red');
            element.style.backgroundPosition = '0 0';
        })

        e.target.firstElementChild.classList.add('button_red');
        e.target.style.backgroundPosition = '0 -173px';
        moveLight();

    } else if (e.target.id === 'wl3') {
        categoryImg.src = 'img/work-list/work-list_graphic-big.png';
        categoryTitle.innerHTML = 'Graphic Design & Photography'
        categoryTitle.style.maxWidth = '362px';

        workListButton.forEach(element => {
            element.firstElementChild.classList.remove('button_red');
            element.style.backgroundPosition = '0 0';
        })

        e.target.firstElementChild.classList.add('button_red');
        e.target.style.backgroundPosition = '0 -173px';
        moveLight();

    } else if (e.target.id === 'wl4') {
        categoryImg.src = 'img/work-list/work-list_hlopushka-big.png';
        categoryTitle.innerHTML = 'Lyric Videos & Animation';
        categoryTitle.style.maxWidth = '362px';

        workListButton.forEach(element => {
            element.firstElementChild.classList.remove('button_red');
            element.style.backgroundPosition = '0 0';
        })

        e.target.firstElementChild.classList.add('button_red');
        e.target.style.backgroundPosition = '0 -173px';
        moveLight();

    } else if (e.target.id === 'wl5') {
        categoryImg.src = 'img/work-list/work-list_lupa-big.png';
        categoryTitle.innerHTML = 'Business Development';
        categoryTitle.style.maxWidth = '362px';

        workListButton.forEach(element => {
            element.firstElementChild.classList.remove('button_red');
            element.style.backgroundPosition = '0 0';
        })

        e.target.firstElementChild.classList.add('button_red');
        e.target.style.backgroundPosition = '0 -173px';
        moveLight();

    } else if (e.target.id === 'wl6') {
        categoryImg.src = 'img/work-list/work-list_headphone-big.png';
        categoryTitle.innerHTML = 'Brand Campaigns';
        categoryTitle.style.maxWidth = "308px";

        workListButton.forEach(element => {
            element.firstElementChild.classList.remove('button_red');
            element.style.backgroundPosition = '0 0';
        })

        e.target.firstElementChild.classList.add('button_red');
        e.target.style.backgroundPosition = '0 -173px';
        moveLight();
    }
}

workListButton.forEach(element => {
    cursorHover(element);
    element.addEventListener('mouseover', () => {
        element.style.backgroundPosition = '0 -173px';
    })

    element.addEventListener('mouseleave', () => {
        if (!element.firstElementChild.classList.contains('button_red')) {
            element.style.backgroundPosition = '0 0';
        }
    })
})

// Team Carousel and Hover Footer

function carousel() {
    const items = document.querySelectorAll('.carousel__cart');
    const btnPrev = document.querySelector('.btn_prev');
    const btnNext = document.querySelector('.btn_next');

    // Как динамично добавить order?
    // items.forEach(element => {
    // element.style.order = items.indexOf(element) + 1;
    // console.log(items.indexOf(element));
    // })

    btnPrev.onclick = function () {
        items.forEach(element => {
            if (element.style.order < items.length) {
                element.style.order = element.style.order * 1 + 1;
            } else if (element.style.order === '5') {
                element.style.order = 1;
            }
        })
    }

    btnNext.onclick = function () {
        items.forEach(element => {
            if (element.style.order > 1) {
                element.style.order -= 1;
            } else if (element.style.order === '1') {
                element.style.order = 5;
            }
        })
    }

    items.forEach(element => {
        cursorHover(element);
    });

    cursorHover(btnPrev);
    cursorHover(btnNext);
}
carousel();

function footer() {
    let footerAnimation = document.querySelector('.footer_active');
    cursorHover(footerAnimation.parentNode);

    footerAnimation.parentNode.addEventListener('mouseover', () => {
        footerAnimation.style.transform = `scaleX(-${document.documentElement.clientWidth}) translateX(-50%)`;
    })

    footerAnimation.parentNode.addEventListener('mouseleave', () => {
        footerAnimation.style.transform = '';
    })
}
footer();