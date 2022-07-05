let nav = document.querySelector('.nav-butt'),
    mailLink = document.querySelector('.mail-link'),
    subTitle = document.querySelector('.block-text'),
    cont = document.querySelectorAll('.content'),
    mess = document.querySelector('.icon-mess'),
    showForm = document.querySelector('.bgForm'),
    close = document.querySelector('.close'),
    mapShow = document.querySelector('.mapShow'),
    bgMap = document.querySelector('.bgMap'),
    navMenu = $('.nav-butt li'),
    showMeTheMap = document.querySelector('.showMeTheMap'),
    tab = document.querySelectorAll('.nav-tab');


function slider(mainCLass) {
    if (document.documentElement.clientWidth <= 420) {
        $(mainCLass).slick({
            verticalSwiping: false,
            slidesToShow: 1,
            autoplay: false,
            arrows: true,
            centerMode: true,
            adaptiveHeight: false,
            centerPadding: '0px',
        })
    }
}

function phoneValid(phone) {
    $(phone).mask('+7 (999) 999-99-99');
}

function hideContetn(a) {
    for (let i = a; i < cont.length; i++) {
        cont[i].classList.remove('show');
        cont[i].classList.add('hide');
    }
}
hideContetn(1);

function showContent(b) {
    if (cont[b].classList.contains('hide')) {
        cont[b].classList.remove('hide');
        cont[b].classList.add('show');
    }
}

nav.addEventListener('click', e => {
    let target = e.target;
    if (target && target.classList.contains('nav-tab')) {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                hideContetn(0);
                showContent(i);
                break;
            }
        }
    }
})


function showForms(mess, form) {
    mess.addEventListener('click', function () {
        form.style.display = 'block';
    })
}

function showToLink(link, showBlock) {
    link.addEventListener('click', function (e) {
        showBlock.style.display = 'block';
        e.preventDefault();
    })
}

close.addEventListener('click', function () {
    showForm.style.display = 'none';
});

function closeOnBg(clickBg) {
    clickBg.addEventListener('click', (e) => {
        let target = e.target;
        if (target == clickBg) {
            clickBg.style.display = 'none';
        }
    })
}

function showBlock(classHover, classShowText) {
    $(classHover).on('click', function () {
        $(this).parent().children(classShowText).slideToggle();
    })
}

function changeActive(clickTarget, classAdd) {
    $(clickTarget).on('click', function () {
        $(clickTarget).removeClass(classAdd);
        $(this).addClass(classAdd);
    })
}
const arrow = $('.title');
console.log(arrow);
$(arrow).on('click', function () {
    $(this).toggleClass('rotate');
})

changeActive(navMenu, 'active');

showToLink(mailLink, showForm);
showToLink(showMeTheMap, bgMap);

closeOnBg(showForm);
closeOnBg(bgMap);

showForms(mess, showForm);
showForms(mapShow, bgMap);

showBlock('.title', '.subTitle');
