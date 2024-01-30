import {useCart} from "@/pages/solved/shopping-cart/CartContext";

const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart();
  const totalPrice = cart?.reduce((acc, item) => acc + (item.quantity * item.price), 0);

  return (
    <div>
      CART:
      {cart?.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <div>Quantity: {item.quantity}</div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default ShoppingCart;
