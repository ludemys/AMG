// AOS INIT
AOS.init()

const copyrightYear = () => {
  const date = new Date();
  let copyrightYear = document.querySelector('#copyrightYear');
  copyrightYear.innerHTML = 'Todos los derechos reservados&copy ' + date.getFullYear()
}

copyrightYear();