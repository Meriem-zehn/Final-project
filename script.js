// const [cartItems, setCartItems] = useState([]);
// const [totalPrice, setTotalPrice] = useState(0);

// const addToCart = (product) => {
//     const existingItem = cartItems.find((item) => item.id === product.id);
//     if (existingItem) {
//       existingItem.quantity += 1;
//       setCartItems([...cartItems]);
//     } else {
//       const newItem = { ...product, quantity: 1 };
//       setCartItems([...cartItems, newItem]);
//     }
//     setTotalPrice(totalPrice + product.price);
//   };


//   <Product addToCart={addToCart} />



const card = document.querySelector('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      card.classList.add('visible');
      observer.disconnect();
    }
  });
});

observer.observe(card);