let getProduct = new URLSearchParams(window.location.search).get('product');
let trademarkId;

const trademarksList = [{
    id: 0,
    name: 'Cheverry',
    products: [
      {
        id: 0,
        name: 'Blonde Ale',
        description: 'Es una cerveza de cuerpo ligero, con amargor medio, ligero aroma cítrico, con buena carbonatación pero con espuma poco persistente. Fácil de beber y refrescante. Ideal para acompañar picadas, pizzas y frutos de mar.',
        imageSrc: './assets/images/products/cheverry/blonde_ale.png'
      },
      {
        id: 1,
        name: 'AAA',
        description: 'Conocidas simplemente como Red Ales en algunas regiones, fueron popularizadas en zonas de cultivo del lúpulo en el norte de California y noroeste del Pacífico antes de diseminarse por el resto del mundo. Con cuerpo, rica en caramelos y un balance equilibrado entre la malta y los lúpulos. Ideal para acompañar carnes, quesos y hamburguesas.',
        imageSrc: './assets/images/products/cheverry/aaa.png'
      },
      {
        id: 2,
        name: 'English Brown',
        description: 'Elaborada con maltas caramelo, un toque de maltas oscuras y lúpulos ingleses, agradable aroma acaramelado y ligeramente balanceada hacia las maltas, con cuerpo medio y de color rojizo. Puede servirse con carnes rojas, hamburguesas y cerdo.',
        imageSrc: './assets/images/products/cheverry/english_brown.png'
      },
      {
        id: 3,
        name: 'Dubbel',
        description: 'De origen belga, color cobrizo, de cuerpo medio-pleno. Ofrece aromas y sabores complejos dulces y dostados por las maltas especiales utilizadas, y frutales debido a los ésteres generados en fermentación. MArida con carnes, quesos fuertes y postres a base de chocolate.',
        imageSrc: './assets/images/products/cheverry/dubbel.png'
      },
      {
        id: 4,
        name: 'Session IPA',
        description: 'Una Cerveza que logra representar el estilo original con muy bajo contenido alcohólico. Se destacan los aromas de los lúpulos americanos, leve amargor y mucho sabor. Ideal para acompañar ensaladas, pescados, mariscos y algunas pizzas poco condimentadas. Especial para épocas calurosas!.',
        imageSrc: './assets/images/products/cheverry/session_ipa.png'
      },
      {
        id: 5,
        name: 'Honey',
        description: 'De color dorado, cuerpo medio, con un intenso aroma y sabor a miel. Se caracteriza por ser muy frasca, agradable, de gusto dulce y un notable carácter a miel. Ideal para calmar la sed o acompañar con alguna ensalada o platos de sabores neutros o afrutados.',
        imageSrc: './assets/images/products/cheverry/honey.png'
      },
      {
        id: 6,
        name: 'IPA',
        description: 'Es una cerveza elaborada a base de maltas pálidas y un toque de maltas caramelo, con fuerte sabor y aroma a lúpulos americanos, espuma blanca persistente, de cuerpo medio y con gran carácter. Ideal para maridar con quesos fuertes y picantes.',
        imageSrc: './assets/images/products/cheverry/ipa.png'
      }
    ]
  },
  {
    id: 1,
    name: 'Gaukler',
    products: [
      {
        id: 0,
        name: 'American IPA',
        description: 'De color dorado intenso y aromas florales y frutales, producto de la utilización de lúpulos Americanos. Amargor intenso pero equilibrado con la malta.',
        imageSrc: './assets/images/products/gaukler/american_ipa.png'
      },
      {
        id: 1,
        name: 'Red IPA',
        description: 'Aroma intenso a lúpulo con marcado amargor cuidadosamente equilibrado con el dulzor de las maltas especiales. Una cerveza para cerveceros.',
        imageSrc: './assets/images/products/gaukler/red_ipa.png'
      },
      {
        id: 2,
        name: 'Honey Beer',
        description: 'Destacando el sabor y aroma a miel Gaukler Honey Beer recrea este estilo particular de cerveza de color oro profundo y notas dulces pero equilibradas.',
        imageSrc: './assets/images/products/gaukler/honey_beer.png'
      },
      {
        id: 3,
        name: 'Scotch Ale',
        description: 'Gaukler Scotch Ale resalta las características de la malta especial otorgando un conjunto de aromas dulces y color rubí profundo, respetando el tradicional estilo de la cerveza escocesa.',
        imageSrc: './assets/images/products/gaukler/scotch_ale.png'
      },
      {
        id: 4,
        name: 'Golden Ale',
        description: 'De color dorado intenso y aroma balanceado entre lúpulo y malta, Gaukler Golden Ale es la cerveza perfecta para compartir largas charlas y gratos momentos.',
        imageSrc: './assets/images/products/gaukler/golden_ale.png'
      },
      {
        id: 5,
        name: 'Belgian Blonde',
        description: 'Cerveza rubia tipo Strong Belgian Blonde con frutos del bosque.',
        imageSrc: './assets/images/products/gaukler/belgian_blonde.png'
      }
    ]
  },
  {
    id: 2,
    name: 'Baum',
    products: [
      {
        id: 0,
        name: 'Hop Pack',
        description: 'Pack de cervezas en lata con dos California Session IPA, dos Fuck IPA y dos Double IPA.',
        imageSrc: './assets/images/products/baum/hop_pack.png'
      },
      {
        id: 1,
        name: 'Mix Six',
        description: 'Pack de cervezas en lata con dos Scottish, dos Honey y una Gladstone Stout y una California Session IPA.',
        imageSrc: './assets/images/products/baum/mix_six.png'
      }
    ]
  }
]

//Recognize which trademark is in the url

const validateGetProduct = () => {
  let flag = false;

  trademarksList.forEach(i => {
    if (i.name.toLowerCase() == getProduct.toLowerCase()) {
      flag = true;

      trademarkId = i.id;
    }
  });

  return flag;
}

if (!validateGetProduct()) {
  getProduct = 'Cheverry'
  trademarkId = 0;
}

//Create and add elements to DOM

for(let i = 0; i < trademarksList[trademarkId].products.length; i++){
  //Create elements
  let productDiv = document.createElement('div');
  productDiv.className = 'product';

  let productImage = document.createElement('img');
  productImage.className = 'image';

  let productName = document.createElement('p');
  productName.className = 'name'

  let productDescription = document.createElement('p');
  productDescription.className = 'description';


  //Append elements as childs of div.product
  productDiv.appendChild(productImage);
  productDiv.appendChild(productName);
  productDiv.appendChild(productDescription);

  //Append div.product as child of div.product-container
  document.querySelector('.product-container').appendChild(productDiv);
}


//Fill created elements with product data

const fillProductData = () => {
  let productElements = Array.from(document.getElementsByClassName('product'));

  
  let productId = 0;
  let child;
  productElements.forEach(i => {
    child = Array.from(i.childNodes);

    child[0].setAttribute('src', trademarksList[trademarkId].products[productId].imageSrc);
    child[0].setAttribute('alt', trademarksList[trademarkId].products[productId].name + ' beer');
    child[1].innerHTML = trademarksList[trademarkId].name + ' ' + trademarksList[trademarkId].products[productId].name;
    child[2].innerHTML = trademarksList[trademarkId].products[productId].description;

    productId++;
  })

}
fillProductData();