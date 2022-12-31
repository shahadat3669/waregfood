const allLinks = document.querySelectorAll('a:link');

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
    });
  });
};

export default linksHelper;
