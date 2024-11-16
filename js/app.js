document.getElementById('contactButton').onclick = function() {
    window.location.href = 'contact.html';
};
document.getElementById('contactButtonFuter').onclick = function() {
    window.location.href = 'contact.html';
};
document.getElementById('headerLogo').onclick = function() {
    window.location.href = 'index.html'
};



gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create ({
        wrapper : '.wrapper',
        content : '.content',
        smooth : 2,
        effects : true
    });

    let headerItems = gsap.utils.toArray('.mainHeaderSpan')

    headerItems.forEach(item => {
        gsap.fromTo(item, {opacity: 0, x: -150}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-400',
                end: '-100',
                scrub: true
            }
        })
    })

    let heroService = gsap.utils.toArray('.serviceHeaderHero')

    heroService.forEach(item => {
        gsap.fromTo(item, {x: 500}, {
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-450',
                end: '-50',
                scrub: true
            }
        })
    })



    let productList = gsap.utils.toArray('.productListItemText')

    productList.forEach(item => {
        gsap.fromTo(item, {x: -550}, {
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-600',
                end: '-200',
                scrub: true
            }
        })
    })
    let productListText = gsap.utils.toArray('.productListText_item')

    productListText.forEach(item => {
        gsap.fromTo(item , {opacity: 0, x: -550}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-600',
                end: '-200',
                scrub: true
            }
        })
    })



    let heroComent = gsap.utils.toArray ('.aboutHeroComent')

    heroComent.forEach(item => {
        gsap.fromTo(item, {x: 150}, {
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-400',
                end: '-100',
                scrub: true
            }
        })
    })
}
