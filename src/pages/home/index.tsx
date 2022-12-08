import { Fragment, useState, useEffect } from "react";
import { ProductResponse } from "types/products";
import axios from "axios";
import Header from "components/header/Header";
import ProductCard from "../../components/productCard/ProductCard";
// Styles
import {
  Select,
  BgImageStyle,
  ProductListWrapperStyle,
  ProductListStyle,
  ButtonStyle,
} from "./HomeStyles";
import { SpinnerStyle } from "components/spinner/SpinnerStyles";

const Home = () => {
  const [products, setProducts] = useState<ProductResponse[] | []>([]);
  const [order, setOrder] = useState<string>("lth");
  const [viewAll, setViewAll] = useState<boolean>(false);
  const [sortedProducts, setSortedProducts] = useState<ProductResponse[] | []>(
    []
  );

  useEffect(() => {
    axios.get("https://efuktshirts.com/products.json").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  useEffect(() => {
    const data = [...products];
    const filterData = data.sort((a: any, b: any) => {
      switch (order) {
        case "lth":
          return Number(a.variants[0].price) - Number(b.variants[0].price);
        case "htl":
          return Number(b.variants[0].price) - Number(a.variants[0].price);
        case "aToz":
          return a.title.localeCompare(b.title);
        case "zToa":
          return b.title.localeCompare(a.title);
        default:
          return a.variants[0].price - b.variants[0].price;
      }
    });
    setSortedProducts(filterData);
  }, [products, order]);

  const handleView = () => {
    if (viewAll) {
      setOrder("lth");
    }
    setViewAll(!viewAll);
  };

  return (
    <Fragment>
      <Header />
      <BgImageStyle />
      {!sortedProducts.length ? (
        <SpinnerStyle />
      ) : (
        <ProductListWrapperStyle>
          <div>
            <Select value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="aToz">Title - A to Z</option>
              <option value="zToa">Title - Z to A</option>
              <option value="htl">Highest Price</option>
              <option value="lth">Lowest Price</option>
            </Select>
            <ProductListStyle>
              {(!viewAll ? sortedProducts.slice(0, 10) : sortedProducts).map(
                (product: ProductResponse, index: number) => (
                  <ProductCard key={index} product={product} />
                )
              )}
            </ProductListStyle>
            <ButtonStyle>
              <button onClick={() => handleView()}>
                {!viewAll ? "View All" : "Collapse"}
              </button>
            </ButtonStyle>
          </div>
        </ProductListWrapperStyle>
      )}
    </Fragment>
  );
};

export default Home;
