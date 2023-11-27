import { BsCartPlus } from "react-icons/bs";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addProductToCart } from "../../redux/cart/actions";
import { addProduct } from "../../redux/cart/slice";

// Utilities


const ProductItem = ({ product }) => {
  const dispatch = useDispatch()

  const handleClickProduct = () => dispatch(addProduct(product));


  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleClickProduct}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
