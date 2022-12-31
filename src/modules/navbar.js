const navBtn = document.querySelector('.header__nav-btn');
const header = document.querySelector('.header');

const navBar = () => {
  navBtn.addEventListener('click', () => {
    header.classList.toggle('header--open');
  });
};

export default navBar;
