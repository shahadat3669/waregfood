const allLinks = document.querySelectorAll('a:link');

const linksHelper = () => {
  allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
    });
  });
};

export default linksHelper;
