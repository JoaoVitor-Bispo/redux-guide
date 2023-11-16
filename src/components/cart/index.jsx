// Styles
import * as Styles from "./styles";

//Utilities
import { useSelector } from "react-redux";
import CartItem from "../cart-item";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const { products } = useSelector(root => root.cartReducer)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map((item, key)=> <CartItem product={item} key={key}/>)}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
