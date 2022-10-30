const setNavBar = () => {
  const navClickList = document.querySelector('#list-link');
  const navClickAdd = document.querySelector('#add-link');
  const navClickContact = document.querySelector('#contact-link');

  const navList = document.querySelector('#list');
  const navAdd = document.querySelector('#add');
  const navContact = document.querySelector('#contact');

  navClickList.addEventListener('click', () => {
    navList.classList = ('show-section');
    navClickList.classList = ('active');
    navClickAdd.classList.remove('active');
    navClickContact.classList.remove('active');
    navAdd.classList = ('hide-section');
    navContact.classList = ('hide-section');
  });

  navClickAdd.addEventListener('click', () => {
    navList.classList = ('hide-section');
    navAdd.classList = ('show-section');
    navClickAdd.classList = ('active');
    navClickList.classList.remove('active');
    navClickContact.classList.remove('active');
    navContact.classList = ('hide-section');
  });

  navClickContact.addEventListener('click', () => {
    navList.classList = ('hide-section');
    navAdd.classList = ('hide-section');
    navContact.classList = ('show-section');
    navClickContact.classList = ('active');
    navClickList.classList.remove('active');
    navClickAdd.classList.remove('active');
  });
}

export default setNavBar;