const allLinks = document.querySelectorAll('a:link');
const header = document.querySelector('.header');

const linksHelper = () => {
  allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');

      if (href === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

      if (href !== '#' && href.startsWith('#')) {
        const sectionElement = document.querySelector(href);
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }

      if (link.classList.contains('header__nav-link')) {
        header.classList.toggle('header--open');
      }
    });
  });
};

export default linksHelper;
