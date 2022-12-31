const heroSection = document.querySelector('.hero');

const stickyNav = () => {
  const obs = new IntersectionObserver(
    (entries) => {
      const ent = entries[0];
      if (ent.isIntersecting === false) {
        document.body.classList.add('sticky');
      }
      if (ent.isIntersecting === true) {
        document.body.classList.remove('sticky');
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: '-80px',
    },
  );
  obs.observe(heroSection);
};
export default stickyNav;
