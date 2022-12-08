import {
  ProductStyle,
  ProductBodyStyle,
  ButtonWrapperStyle,
} from "./ProductCardStyles";
//Types
import { ProductResponse } from "../../types/products";

interface Props {
  product: ProductResponse;
}

function ProductCard({ product }: Props) {
  return (
    <ProductStyle>
      <div className="productImage">
        <img src={product.images[0].src} alt="" />
      </div>
      <ProductBodyStyle>
        <div className="title">
          <h5>{product.title}</h5>
          <p>{`£${product.variants[0].price}`}</p>
        </div>
        <ButtonWrapperStyle>
          <button>Quick View</button>
        </ButtonWrapperStyle>
      </ProductBodyStyle>
    </ProductStyle>
  );
}

export default ProductCard;
