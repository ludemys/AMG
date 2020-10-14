"use strict";

// AOS INIT
AOS.init();

const copyrightYear = () => {
  const date = new Date();
  let copyrightYear = document.querySelector('#copyrightYear');
  copyrightYear.innerHTML = '> Copyright&copy ' + date.getFullYear() + ' <';
};

copyrightYear();