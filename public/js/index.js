"use strict";

// AOS INIT
AOS.init();

const copyrightYear = () => {
  const date = new Date();
  let copyrightYear = document.querySelector('#copyrightYear');
  copyrightYear.innerHTML = 'Todos los derechos reservados&copy ' + date.getFullYear();
};

copyrightYear();

//Footer media

const changeFooterMediaColumns = (matchMedia) => {
  let mediaContainerAux = document.querySelector('#mediaContainerAux');

  if(matchMedia.matches){
    let whatsappFooterLink = document.querySelector('#whatsappFooterLink');

    let newWhatsappElement = whatsappFooterLink.cloneNode(true);

    newWhatsappElement.id = 'whatsappFooterLink';

    mediaContainerAux.appendChild(newWhatsappElement);
    whatsappFooterLink.remove();
  }
  else{
    let mediaContainerAuxChilds = Array.from(mediaContainerAux.childNodes);
    
    if(mediaContainerAuxChilds[mediaContainerAuxChilds.length - 1].id == 'whatsappFooterLink'){

      let whatsappFooterLink = document.querySelector('#whatsappFooterLink');
      let newWhatsappElement = whatsappFooterLink.cloneNode(true);
      let mediaAside = document.querySelectorAll('.media')[0];

      mediaAside.appendChild(newWhatsappElement);
      whatsappFooterLink.remove();
    }
  }
}
let matchMedia = window.matchMedia("(max-width: 1200px)");
changeFooterMediaColumns(matchMedia);
matchMedia.addListener(changeFooterMediaColumns);