import classes from './styles.module.css'
import {CartProvider} from "@/pages/solved/shopping-cart/CartContext";
import ShoppingCart from "@/pages/solved/shopping-cart/ShoppingCart";
import ItemList from "@/pages/solved/shopping-cart/ItemList";

export default function Hooks() {
  return <div className={classes.main}>
    <CartProvider>
      <ItemList />
      <ShoppingCart />
    </CartProvider>
  </div>
}

