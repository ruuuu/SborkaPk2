const navBar = document.querySelector('.header__nav');
const links = document.querySelectorAll('a');

links.forEach((link) => {

  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    // console.log(link.getAttribute('href'))
    const section = document.querySelector(link.getAttribute('href'));
    
    if(section){
      // scrollIntoView() не будет рабоать во всех браузерах 
      // section.scrollIntoView({ // плавно скроллим к  секции
      //   block: 'start',
      //   behavior: 'smooth',
      // });

      // кроссбраузерный скролл https://www.npmjs.com/package/seamless-scroll-polyfill:
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  });

});