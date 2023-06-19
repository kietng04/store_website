const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const product = [
    {
        id: 1,
        title: "Air Force",
        price:  4999000,
        colors: [
            {
                code: "black",
                img: "./img/8da28c8a-a4c7-40f3-aeb6-ddaf9511aab6.webp",

            },
            {
                code: "darkblue",
                img: "./img/NIKE_AIR_FORCE_1_LOW___07_AN20_NAVY_BLUEs-mini.jpg"
            },

        ],
    },
    {
        
        id: 2,
        title: "Air Jordan",
        price:  7999999,
        colors: [
            {
                code: "lightgray",
                img: "./img/air-jordan-1-mid-light-smoke-grey-anthracite-554724-078.jpg",

            },
            {
                code: "green",
                img: "./img/1652b237-e4be-4987-821c-b1ee8f8afafd.jpg"
            },

        ],
    },

    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
          {
            code: "lightgray",
            img: "./img/fashion4men-yd-yd.-Hoxton-Blazer-Light-Grey-M.jpeg",
          },
          {
            code: "green",
            img: "./img/OVERSIZEDGREENBLAZER_RAMONA_2000x2000.webp",
          },
        ],
      },

      {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
          {
            code: "black",
            img: "./img/giay-nike-crater-impact-black-db2477-001.png",
          },
          // {
          //   code: "lightgray",
          //   img: "./img/nike-crater-impact-se-partial-gray-dj6308-001-1.jpg",
    
          // },
        ],
      },
      {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
          {
            code: "gray",
            img: "./img/nike-wmns-space-hippie-04-south-beach-cd3476-003.png",
          },
          {
            code: "black",
            img: "./img/39-429651.webp",
          },
        ],
      },
];

let choosenProduct = product[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100*index}vw)`;
        choosenProduct = product[index];
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = choosenProduct.price + "VND";
        currentProductImg.src = choosenProduct.colors[0].img;
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
});
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});
  
  close.addEventListener("click", () => {
    payment.style.display = "none";
});