
// // Select the elements
// const amountInput = document.getElementById('amountInput');


// function decreaseQuantity(id) {
//     const input = document.getElementById(`amountInput${id}`);
//     const value = parseInt(input.value);
//     if (value > 1) {
//         input.value = value - 1;
//     }
// }

// function increaseQuantity(id) {
//     const input = document.getElementById(`amountInput${id}`);
//     const value = parseInt(input.value);
//     input.value = value + 1;
// }

// // Increase the value
// function incrementValues() {
//     amountInputs.value = parseInt(amountInputs.value) + 1;
// }

// // Decrease the value and prevent going below 0
// function decrementValues() {
//     amountInputs.value = Math.max(0, parseInt(amountInputs.value) - 1);
// }


// Increase the value
function increaseButton(a) {
    console.log(a)
    amountInput.value = amountInput.value < a ? parseInt(amountInput.value) + 1 :
        parseInt(amountInput.value) + 0;
}

// Decrease the value and prevent going below 0
function decreaseButton() {
    amountInput.value = Math.max(0, parseInt(amountInput.value) - 1);
};

// //   /
// // 
// // 
// // cart.js



let cart = {
    products: [],
    addProduct: function (product, quantity) {
        let existingProduct = this.products.find(p => p.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += parseInt(quantity);
        } else {
            this.products.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: parseInt(quantity)
            });
        }
        this.save();
    },
    removeProduct: function (id) {
        console.log('productId la ')

        let index = this.products.findIndex(p => p.id == id);
        console.log(index)
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log(this.products.length)
            this.save();
        }
    },
    save: function () {
        localStorage.setItem('cart', JSON.stringify(this.products));
    },
    load: function () {
        let storedCart = localStorage.getItem('cart');
        if (storedCart) {
            this.products = JSON.parse(storedCart);
        }
    },
    getTotalPrice: function () {
        cart.load();

        let totalPrice = 0;
        this.products.forEach(product => {


            totalPrice += parseInt(product.price) * product.quantity;
        });
        return totalPrice;
    }

};

// cart.load();



// // Fonction pour afficher les produits du panier
// function displayCart() {
//     cart.load();

//     const cartList = document.querySelector('.menus');
//     cartList.innerHTML = ``
//     const cartServices = document.createElement('div');
//     cartServices.innerHTML = `



//     <div
//       class="container mx-auto p-4 max-w-md bg-white rounded-md shadow-md border-2 border-solid border-gray-200"
//     >
//       <h2 class="text-lg font-bold mb-4">Service</h2>
//       <div class="flex items-center justify-start">
//         <input
//           id="delivery-checkbox"
//           type="checkbox"
//           checked="checked"
//           class="checkbox mr-4"
//         />
//         <div>
//           <p class="text-sm font-medium text-gray-700">Livraison</p>
//           <p class="text-sm font-medium text-gray-300">
//             Forfait de 1000 FCFA
//           </p>
//         </div>
//       </div>
//     </div>


//     <div
//       class="container mx-auto p-4 max-w-md bg-white rounded-md shadow-md border-2 border-solid border-gray-200"
//     >
//       <h2 class="text-lg font-bold mb-4">
//         Récapitulatif de la commande
//       </h2>
//       <div id="order-summary"></div>
//     </div>
//     `

//     const cartArticles = document.createElement('div');
//     cartArticles.innerHTML = `
//     <div
//   class="container mx-auto p-4 max-w-md bg-white rounded-md shadow-md border-2 border-solid border-gray-200"
// >
//   <h2 class="text-lg font-bold mb-4">Articles</h2>

// <div class="artiles" >
// </div>
// </div>
//     `
//     cartList.appendChild(cartArticles);
//     cartList.appendChild(cartServices);
//     const LesArtiles = document.querySelector('.artiles');


//     // Parcourir les produits du panier
//     cart.products.forEach(product => {
//         const cartItem = document.createElement('div');
//         const cartContainer = document.createElement('div');
//         cartContainer.style.display = 'flex';
//         cartContainer.style.flexDirection = 'column';
//         LesArtiles.appendChild(cartContainer);
//         cartItem.innerHTML = `
//   <div class="flex items-center justify-between mb-4">
//     <div>
//       <p class="text-md">${product.name} </p>
//       <p class="text-md font-mono font-bold">FCFA  ${product.price}</p>
//       <div class="w-[150px] max-w-sm relative mt-4 z-">
//         <div class="relative">
//           <button
//             onclick="decreaseQuantity(${product.id})"
//             id="decreaseButtons"
//             class="absolute right-9 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//             type="button"

//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               class="w-4 h-4"
//             >
//               <path
//                 d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"
//               />
//             </svg>
//           </button>
//           <input
//             id="amountInput${product.id}"
//             type="number"
//             value="${product.quantity}"
//             min="1"
//             class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
//           />
//           <button
//            onclick="increaseQuantity(${product.id})"

//             id="increaseButtons"

//             class="absolute right-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//             type="button"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               class="w-4 h-4"
//             >
//               <path
//                 d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//     <button class="btn btn-secondary remove-product" data-id="${product.id}">Delete</button>
//   </div>





//         `;
//         cartContainer.appendChild(cartItem);


//     });

//     // Afficher le prix total
//     const totalPrice = cart.getTotalPrice();
//     const totalPriceElement = document.createElement('li');
//     totalPriceElement.innerHTML = `Prix total : ${totalPrice} €`;
//     cartList.appendChild(totalPriceElement);
//     // console.log(totalPrice)

// }

// // Appeler la fonction pour afficher les produits du panier
// displayCart();

// // Ajouter un événement pour supprimer un produit du panier
// document.addEventListener('click', event => {
//     if (event.target.classList.contains('remove-product')) {
//         const productId = event.target.dataset.id;

//         cart.removeProduct(productId);
//         displayCart();
//     }
// });

// document.addEventListener('click', function (event) {
//     if (event.target.id === 'increaseButtons') {
//         const input = event.target.parentElement.querySelector('input[type="number"]');
//         const productId = input.id.replace('amountInput', '');
//         const product = cart.products.find(p => p.id === parseInt(productId));
//         if (product) {
//             product.quantity++;
//             cart.save();
//             displayCart();
//         }
//     }

//     if (event.target.id === 'decreaseButtons') {
//         const input = event.target.parentElement.querySelector('input[type="number"]');
//         const productId = input.id.replace('amountInput', '');
//         const product = cart.products.find(p => p.id === parseInt(productId));
//         if (product && product.quantity > 1) {
//             product.quantity--;
//             cart.save();
//             displayCart();
//         }
//     }
// });

// const LesArtiles = document.querySelector('.artiles');


//     // Parcourir les produits du panier
//     cart.products.forEach(product => {
//         const cartItem = document.createElement('div');
//         cartItem.innerHTML = `
//   <div class="flex items-center justify-between mb-4">
//     <div>
//       <p class="text-md">${product.name} </p>
//       <p class="text-md font-mono font-bold">FCFA  ${product.price}</p>
//       <div class="w-[150px] max-w-sm relative mt-4 z-">
//         <div class="relative">
//           <button
//             onclick="decreaseQuantity(${product.id})"
//             id="decreaseButtons"
//             class="absolute right-9 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//             type="button"

//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               class="w-4 h-4"
//             >
//               <path
//                 d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"
//               />
//             </svg>
//           </button>
//           <input
//             id="amountInput${product.id}"
//             type="number"
//             value="${product.quantity}"
//             min="1"
//             class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
//           />
//           <button
//            onclick="increaseQuantity(${product.id})"

//             id="increaseButtons"

//             class="absolute right-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//             type="button"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               class="w-4 h-4"
//             >
//               <path
//                 d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//     <button class="btn btn-secondary remove-product" data-id="${product.id}">Delete</button>
//   </div>





//         `;
//         LesArtiles.appendChild(cartItem);


//     });









// Sélection des éléments
const cartList = document.querySelector('.menus');
const amountInput = document.getElementById('amountInput');

// Fonction pour afficher les produits du panier
function displayCart() {
    cart.load();
    cartList.innerHTML = '';
    // prix
    const totalPrice = cart.getTotalPrice();

    // Création des éléments du panier
    const cartServices = document.createElement('div');
    cartServices.innerHTML = `
    <div class="container mx-auto p-4 max-w-md bg-white rounded-md shadow-md border-2 border-solid border-gray-200">
      <h2 class="text-lg font-bold mb-4">Service</h2>
      <div class="flex items-center justify-start">
        <input id="delivery-checkbox" type="checkbox" checked="checked" class="checkbox mr-4" />
        <div>
          <p class="text-sm font-medium text-gray-700">Livraison</p>
          <p class="text-sm font-medium text-gray-300">Forfait de 1000 FCFA</p>
        </div>
      </div>
    </div>

    <div class="container mx-auto p-4 max-w-md bg-white rounded-md shadow-md border-2 border-solid border-gray-200">
      <h2 class="text-lg font-bold mb-4">Récapitulatif de la commande</h2>
      
      <div class="flex items-center justify-between">
         <p class="text-sm font-medium text-gray-700">Articles</p>
          <p class="text-sm font-medium text-gray-800">  ${totalPrice} FCFA</p>
        
      </div>
      <div class="divider mx-2"></div>

      <div class="flex items-center justify-between">
         <p class="text-sm font-medium text-gray-700">Livraison</p>
          <p class="text-sm font-medium text-gray-800"> 1000 FCFA</p>
        
      </div>
      <div class="divider mx-2"></div>
      <div class="flex items-center justify-between">
         <p class="text-sm font-medium text-gray-700">Total </p>
          <p class="text-sm font-medium text-gray-800"> ${totalPrice + 1000} FCFA</p>
        
      </div>
    </div>
    <button class="btn mt-4 w-full btn-neutral" onclick="sendWhatsAppOrder()">
    Payer a la livraison</button>
  `;

    const cartArticles = document.createElement('div');
    cartArticles.innerHTML = `
    <div class="container mx-auto p-4 max-w-md bg-white rounded-md shadow-md border-2 border-solid border-gray-200">
      <h2 class="text-lg font-bold mb-4">Articles</h2>
      <div class="artiles"></div>
    </div>
  `;

    cartList.appendChild(cartArticles);
    cartList.appendChild(cartServices);

    const artiles = document.querySelector('.artiles');

    // Affichage des produits du panier
    cart.products.forEach((product) => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <div>
          <p class="text-md">${product.name}</p>
          <p class="text-md font-mono font-bold">FCFA ${product.price}</p>
          <div class="w-[150px] max-w-sm relative mt-4 z-">
            <div class="relative">
              
              <input id="amountInput${product.id}" type="number" value="${product.quantity}" min="1" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
              
            </div>
          </div>
        </div>
        <button class="btn btn-secondary remove-product" data-id="${product.id}">Delete</button>
      </div>
    `;
        artiles.appendChild(cartItem);
    });

    // Affichage du prix total

}
// one 

function sendWhatsAppMessage() {
    console.log('ouoiuou')
    const totalPrice = cart.getTotalPrice();
    const productsCount = cart.products.length;
    const message = `Je souhaite passer une commande de ${productsCount} produits pour un total de ${totalPrice} FCFA.`;
    const phoneNumber = "657718216";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
// deux
// deux
function sendWhatsAppOrder() {
    cart.load();

    // Récupérer les produits et le total
    let message = "Bonjour, je souhaite commander :\n\n";

    cart.products.forEach(product => {
        message += `- ${product.name}  : ${product.price} FCFA (x${product.quantity}) : ${parseFloat(parseFloat(product.quantity) * parseFloat(product.price))} \n  `;
    });

    // Ajouter les frais de livraison et le total
    const deliveryFee = 1000;
    const totalPrice = cart.getTotalPrice() + deliveryFee;

    message += `\nFrais de livraison : ${deliveryFee} FCFA`;
    message += `\n\n*TOTAL : ${totalPrice.toFixed(2)} FCFA*`;
    message += "\n\nJe paierai à la livraison. Merci !";

    // Encoder le message pour l'URL WhatsApp
    const encodedMessage = encodeURIComponent(message);

    // Ouvrir WhatsApp avec le numéro et le message
    window.open(`https://wa.me/657718216?text=${encodedMessage}`, '_blank');
}
// Fonction pour diminuer la quantité d'un produit
function decreaseQuantity(id) {
    const product = cart.products.find((p) => p.id === id);
    if (product && product.quantity > 1) {
        product.quantity--;
        cart.save();
        displayCart();
    }
}

// Fonction pour augmenter la quantité d'un produit
function increaseQuantity(id) {
    const product = cart.products.find((p) => p.id === id);
    if (product) {
        product.quantity++;
        cart.save();
        displayCart();
    }
}

// Appel de la fonction pour afficher les produits du panier
displayCart();

// Ajout d'un événement pour supprimer un produit du panier
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-product')) {
        const productId = event.target.dataset.id;
        cart.removeProduct(productId);
        displayCart();
    }
});


` <select name="categorie_produit">
                        {% comment %} {% for categorie in categories %}
                            <option value="{{ categorie.id }}" {% if produit.categorie.id == categorie.id %}selected{% endif %}>{{ categorie.name }}</option>
                        {% endfor %} {% endcomment %}
                    </select>`