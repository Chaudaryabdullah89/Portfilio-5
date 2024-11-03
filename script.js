console.log(gsap);
let tl = gsap.timeline()
tl.to(".box", {
    y: 0,
    duration: 1,
    ease: "Expo.easeInOut",
    strager: 0.1,
});
var typed = new Typed('#element', {
    strings: ['<i>I am Frontend</i> Enginner.', ' I Am Freelancer.'],
    typeSpeed: 50,
    loop: true,
  });

  const menu = document.querySelector('#menu-btn');
const close = document.querySelector('#close-btn');
  const nav = document.querySelector('.navbr');
menu.addEventListener('click', () => {
    if (nav) {
        console.log(nav);
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
            gsap.from(nav, { x: '-100%', duration: 0.5, ease: 'Expo.easeInOut', onComplete: () => nav.style.display = 'none' });
            menu.style.display = 'block';
            close.style.display = 'none';
        } else {
            nav.style.display = 'block';
            gsap.from(nav, { x: '-100%', duration: 0.5, ease: 'Expo.easeInOut', onComplete: () => nav.style.display = 'block' });
            menu.style.display = 'none';
            close.style.display = 'block';
        }
    }
});
close.addEventListener('click', () => {
    if (nav) {
        console.log(nav);
        nav.style.display = 'none';
        gsap.from(nav, { x: '-100%', duration: 0.5, ease: 'Expo.easeInOut', onComplete: () => nav.style.display = 'none' });
        menu.style.display = 'block';
        close.style.display = 'none';
    }
});


 
    // close.addEventListener('click', () => {
    //     if(nav){
            
    //     console.log(nav);
    //     nav.style.display = 'none';
        
    //     }})