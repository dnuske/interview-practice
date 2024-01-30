import {useCart} from "@/pages/solved/shopping-cart/CartContext";

const Item = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <button onClick={handleAddToCart} >Add to Cart</button>
    </div>
  );
};

export default Item;
