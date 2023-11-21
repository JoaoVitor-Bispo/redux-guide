import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

// Utilities
import userActionTypes from "../../redux/user/action-types";
import { loginUser, logoutUser } from "../../redux/user/actions";

function Header() {
  const dispatch = useDispatch()
  
  const { currentUser } = useSelector(root => root.userReducer)

  const { products } = useSelector(root => root.cartReducer)
  
  const productsQuantity = useMemo(() => products.reduce((before, after) => before + after.quantity, 0), [products])

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => setCartIsVisible(true);
  const loginClick = () => dispatch(loginUser({name: 'jaozada', email: 'teste@gmail.com'}))
  const logoutClick = () => dispatch(logoutUser(null))

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
      {currentUser ? (
        <div onClick={logoutClick}>Logout</div>
        ) : (
          <div onClick={loginClick}>Login</div>
      )}
        <div onClick={handleCartClick}>Carrinho ({productsQuantity})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
