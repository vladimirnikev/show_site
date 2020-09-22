document.body.style.overflow = 'hidden';
let ua = detect.parse(navigator.userAgent);

// ---- Preloader ----
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


window.onload = function () {
    let navigation = document.querySelectorAll('.head__block');

    setTimeout(function () {
        let preloader = document.querySelector('.preloader');
        preloader.classList.add('done');
        document.body.style.overflow = '';
        clearInterval(animatePreloaderImage);
    }, 1000)

    if (ua.browser.family === 'Safari' || ua.browser.family === 'Safari Family') {
        mouseCursor.style.transitionProperty = 'none';
        mouseCursor.style.WebkitFontSmoothing = 'subpixel-antialiased';
        navigation[1].style.position = 'static';
        document.querySelector('.section__text_wrapper').style.position = 'static';
        document.querySelectorAll('.section__img').forEach(element => {
            element.style.position = 'absolute';
        })
    }

    // ---- Parallax Scroll ----
    window.addEventListener('scroll', () => {
        let topScroll = window.pageYOffset;
        let darkBg = document.querySelectorAll('.dark-bg');
        let sectionCoordinates = darkBg[1].parentNode.getBoundingClientRect();
        let workListCoordinates = darkBg[2].parentNode.getBoundingClientRect();
        let teamCoordinates = document.querySelector('.team').getBoundingClientRect();

        if (document.documentElement.clientHeight > 1024) {
            darkBg[0].parentNode.style.position = 'relative';
            darkBg[1].parentNode.style.position = 'relative';
            darkBg[2].parentNode.style.position = 'relative';
            navigation[1].style.position = 'static';
        } else {
            if (topScroll > 200) {
                darkBg[0].style.opacity = `${(topScroll-200)/60*0.1}`;
                darkBg[0].style.zIndex = '20';
            } else {
                darkBg[0].style.zIndex = '';
            }

            if (workListCoordinates.y <= document.documentElement.clientHeight) {
                darkBg[1].parentNode.style.position = 'sticky';
                darkBg[1].parentNode.style.position = '-webkit-sticky';
                darkBg[1].parentNode.style.top = `${sectionCoordinates.y}px`;
                // darkBg[1].style.opacity = `${(topScroll-1177)/78*0.1}`;
                // console.log(workListCoordinates.y);
                darkBg[1].style.opacity = `${(workListCoordinates.y - document.documentElement.clientHeight)/-1000}`;
                darkBg[1].style.zIndex = '31';
            } else {
                darkBg[1].style.zIndex = '';
            }

            // if (topScroll > 2100) {
            //     darkBg[2].style.opacity = `${(topScroll-2100)/68*0.1}`;
            //     darkBg[2].style.zIndex = '2';
            // } else {
            //     darkBg[2].style.zIndex = '-1';
            // }

            // if (document.documentElement.clientHeight > 600) {
            //     darkBg[1].style.opacity = `${(workListCoordinates.y - document.documentElement.clientHeight)/-1000}`;
            //     if (teamCoordinates.y <= workListCoordinates.height) {
            //         darkBg[2].style.opacity = `${(teamCoordinates.y - document.documentElement.clientHeight)/-1000}`;
            //     }
            // }
        }
    })

}

// ---- Parallax Title ----
VanillaTilt.init(document.querySelector('.title__wrapper'), {
    max: 10,
    speed: 4000,
});

// Mouse
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
        if (ua.browser.family === 'Safari' || ua.browser.family === 'Safari Family') {
            mouseCursor.classList.add('cursor_white_safari');
        } else {
            mouseCursor.classList.add('cursor_white');
        }
    })
    element.addEventListener('mouseleave', () => {
        if (ua.browser.family === 'Safari' || ua.browser.family === 'Safari Family') {
            mouseCursor.classList.remove('cursor_white_safari');
        } else {
            mouseCursor.classList.remove('cursor_white');
        }
    })
}

logo.forEach(element => {
    cursorHover(element);
});

navLink.forEach(element => {
    element.addEventListener('mouseover', () => {

        mouseCursor.insertAdjacentHTML('afterbegin', '<p id="cursor_text" class="cursor_text">Contact</p>');

        if (ua.browser.family === 'Safari' || ua.browser.family === 'Safari Family') {
            mouseCursor.classList.add('cursor_nav_safari');
            document.querySelector('.cursor_text').style.transform = 'scale(3)';
        } else {
            mouseCursor.classList.add('cursor_nav');
        }
    })

    element.addEventListener('mouseleave', () => {
        if (ua.browser.family === 'Safari' || ua.browser.family === 'Safari Family') {
            mouseCursor.classList.remove('cursor_nav_safari');
        } else {
            mouseCursor.classList.remove('cursor_nav');
        }
        mouseCursor.firstChild.remove();
    })
});

nav.forEach(element => {
    element.addEventListener('mouseover', () => {

        if (mouseCursor.hasChildNodes()) {
            mouseCursor.firstChild.remove();
            mouseCursor.insertAdjacentHTML('afterbegin', '<p id="cursor_text" class="cursor_text">Open</p>');
        } else {
            mouseCursor.insertAdjacentHTML('afterbegin', '<p id="cursor_text" class="cursor_text">Open</p>');
        }

        if (ua.browser.family === 'Safari' || ua.browser.family === 'Safari Family') {
            mouseCursor.classList.add('cursor_nav_safari');
            document.querySelector('.cursor_text').style.transform = 'scale(3)';
        } else {
            mouseCursor.classList.add('cursor_nav');
        }


    })

    element.addEventListener('mouseleave', () => {
        if (ua.browser.family === 'Safari' || ua.browser.family === 'Safari Family') {
            mouseCursor.classList.remove('cursor_nav_safari');
        } else {
            mouseCursor.classList.remove('cursor_nav');
        }
        mouseCursor.firstChild.remove();
    })
});
// }







// ---- Counter -----
let counter = document.querySelector('.main__counter');
let counterUp = counter.innerHTML;

setInterval(() => {
    counterUp = (counterUp * 1) + 11;
    counter.innerHTML = counterUp.toString().charAt(0) + '.' + counterUp.toString().substring(1, 4) + '.' + counterUp.toString().substring(4, 7) + '.' + counterUp.toString().substring(7);
}, 90);




// ---- Section Clients Hover ----

let imgHovered = document.querySelectorAll('.clients-img__wrapper');

imgHovered.forEach(element => {
    cursorHover(element);
})

// ---- Work List Hover and OnClick ----
let workListButton = document.querySelectorAll('.work-list__img-wrapper');
let workListButtons = document.querySelector('.work-list__buttons');
let categoryImg = document.querySelector('.category__img');
let categoryTitle = document.querySelector('.category__title');

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

        workListButton.forEach(element => {
            element.firstElementChild.classList.remove('button_red');
            element.style.backgroundPosition = '0 0';
        })

        if (document.documentElement.clientWidth < 1050) {
            categoryTitle.style.maxWidth = '253px';
            e.target.style.backgroundPosition = '0 -130px';
            if (document.documentElement.clientWidth < 768) {
                e.target.style.backgroundPosition = '0 -70px';
            }
        } else {
            categoryTitle.style.maxWidth = '362px';
            e.target.style.backgroundPosition = '0 -173px';
        }

        e.target.firstElementChild.classList.add('button_red');
        moveLight();

    } else if (e.target.id === 'wl2') {
        categoryImg.src = 'img/work-list/work-list_star-big.png';
        categoryTitle.innerHTML = 'Creative Services for Infuencers';

        workListButton.forEach(element => {
            element.firstElementChild.classList.remove('button_red');
            element.style.backgroundPosition = '0 0';
        })

        if (document.documentElement.clientWidth < 1050) {
            categoryTitle.style.maxWidth = '253px';
            e.target.style.backgroundPosition = '0 -130px';
            if (document.documentElement.clientWidth < 768) {
                e.target.style.backgroundPosition = '0 -70px';
            }
        } else {
            categoryTitle.style.maxWidth = '362px';
            e.target.style.backgroundPosition = '0 -173px';
        }

        e.target.firstElementChild.classList.add('button_red');
        moveLight();

    } else if (e.target.id === 'wl3') {
        categoryImg.src = 'img/work-list/work-list_graphic-big.png';
        categoryTitle.innerHTML = 'Graphic Design & Photography'

        workListButton.forEach(element => {
            element.firstElementChild.classList.remove('button_red');
            element.style.backgroundPosition = '0 0';
        })

        if (document.documentElement.clientWidth < 1050) {
            categoryTitle.style.maxWidth = '253px';
            e.target.style.backgroundPosition = '0 -130px';
            if (document.documentElement.clientWidth < 768) {
                e.target.style.backgroundPosition = '0 -70px';
            }
        } else {
            categoryTitle.style.maxWidth = '362px';
            e.target.style.backgroundPosition = '0 -173px';
        }

        e.target.firstElementChild.classList.add('button_red');
        moveLight();

    } else if (e.target.id === 'wl4') {
        categoryImg.src = 'img/work-list/work-list_hlopushka-big.png';
        categoryTitle.innerHTML = 'Lyric Videos & Animation';

        workListButton.forEach(element => {
            element.firstElementChild.classList.remove('button_red');
            element.style.backgroundPosition = '0 0';
        })

        if (document.documentElement.clientWidth < 1050) {
            categoryTitle.style.maxWidth = '253px';
            e.target.style.backgroundPosition = '0 -130px';
            if (document.documentElement.clientWidth < 768) {
                e.target.style.backgroundPosition = '0 -70px';
            }
        } else {
            categoryTitle.style.maxWidth = '362px';
            e.target.style.backgroundPosition = '0 -173px';
        }

        e.target.firstElementChild.classList.add('button_red');
        moveLight();

    } else if (e.target.id === 'wl5') {
        categoryImg.src = 'img/work-list/work-list_lupa-big.png';
        categoryTitle.innerHTML = 'Business Development';

        workListButton.forEach(element => {
            element.firstElementChild.classList.remove('button_red');
            element.style.backgroundPosition = '0 0';
        })

        if (document.documentElement.clientWidth < 1050) {
            categoryTitle.style.maxWidth = '253px';
            e.target.style.backgroundPosition = '0 -130px';
            if (document.documentElement.clientWidth < 768) {
                e.target.style.backgroundPosition = '0 -70px';
            }
        } else {
            categoryTitle.style.maxWidth = '362px';
            e.target.style.backgroundPosition = '0 -173px';
        }

        e.target.firstElementChild.classList.add('button_red');
        moveLight();

    } else if (e.target.id === 'wl6') {
        categoryImg.src = 'img/work-list/work-list_headphone-big.png';
        categoryTitle.innerHTML = 'Brand Campaigns';

        workListButton.forEach(element => {
            element.firstElementChild.classList.remove('button_red');
            element.style.backgroundPosition = '0 0';
        })

        if (document.documentElement.clientWidth < 1050) {
            categoryTitle.style.maxWidth = '196px';
            e.target.style.backgroundPosition = '0 -130px';
            if (document.documentElement.clientWidth < 768) {
                e.target.style.backgroundPosition = '0 -70px';
            }
        } else {
            categoryTitle.style.maxWidth = '308px';
            e.target.style.backgroundPosition = '0 -173px';
        }

        e.target.firstElementChild.classList.add('button_red');
        moveLight();
    }
}

workListButton.forEach(element => {
    cursorHover(element);
    element.addEventListener('mouseover', () => {
        if (document.documentElement.clientWidth < 1050) {
            if (document.documentElement.clientWidth < 768) {
                element.style.backgroundPosition = '0 -70px';
            } else {
                element.style.backgroundPosition = '0 -130px';
            }
        } else {
            element.style.backgroundPosition = '0 -173px';
        }
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

    btnPrev.onclick = function () {
        items.forEach(element => {
            if (element.style.order < items.length) {
                element.style.order = element.style.order * 1 + 1;
            } else if (element.style.order === '4') {
                element.style.order = 1;
            }
        })
    }

    btnNext.onclick = function () {
        items.forEach(element => {
            if (element.style.order > 1) {
                element.style.order -= 1;
            } else if (element.style.order === '1') {
                element.style.order = 4;
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