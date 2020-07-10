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
let headBlock = document.querySelectorAll('.head__block');


window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

logo.forEach(element => {
    element.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor_white');

    })
});

logo.forEach(element => {
    element.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor_white');
    })
});

navLink.forEach(element => {
    element.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor_nav');
        mouseCursor.insertAdjacentHTML('afterbegin', '<p id="cursor_text" class="cursor_text">Contact</p>');
    })
});

navLink.forEach(element => {
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
});

nav.forEach(element => {
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
    let section = document.querySelector('.section');
    let darkBg = document.querySelectorAll('.dark-bg');
    let workList = document.querySelector('.work-list');

    if (topScroll < 410) {
        parallax(topScroll, section, 0);
        darkBackground(topScroll, darkBg[0], 400);
    } else if (topScroll > 410) {
        parallax(topScroll, workList, 750);
    }
})

function parallax(topScroll, section, index) {
    section.style.marginTop = `${-topScroll+index}px`;
}

function darkBackground(topScroll, darkBg, speed) {
    darkBg.style.opacity = `${topScroll/speed}`;
    darkBg.style.zIndex = `20`;
}

// ---- Section Hover ----
let imgHovered = document.querySelectorAll('.clients-img__wrapper');

imgHovered.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.insertAdjacentHTML('afterbegin', '<p class="clients-hover__title">Channel Operation and management</p>');
        element.insertAdjacentHTML('afterbegin', '<p class="clients-hover__text">8.2M +</p>');
        element.insertAdjacentHTML('afterbegin', '<img src="img/clients-list_hover.png" class="clients-hover__img">')
        element.insertAdjacentHTML('afterbegin', '<a class="clients-hover__link">Video Link <i class="fas fa-arrow-up"></i></a>')
    })
})

imgHovered.forEach(element => {
    element.addEventListener('mouseleave', () => {
        while (element.children.length > 1) {
            element.removeChild(element.firstChild);
        }
    })
})

// ---- Work List Hover and OnClick ----
let imgInButton = document.querySelectorAll('.work-list__img');
let workListButton = document.querySelectorAll('.work-list__img-wrapper');

let categoryImg = document.querySelector('.category__img');
let categoryTitle = document.querySelector('.category__title');


workListButton.forEach(element => {
    element.addEventListener('mouseover', () => {
        if (element.index === imgInButton.forEach(e => {
                return e.index;
            })) {
            // Можно через CSS бекграунд, или использовать спрайт
        }
    })
})