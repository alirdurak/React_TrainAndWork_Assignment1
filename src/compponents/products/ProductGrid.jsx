import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function ProductGrid() {
  const products = useSelector((state) => state.CommerceSlice.ShownProducts);
  return (
    <div style={{ height: "100%" }} className="container ">
      <div style={{ height: "100%" }} className="row ">
        {products.map((i) => {
          const id = i.id.toString();
          return (
            <div key={id} className="col-3">
              <ProductCard
                id={id}
                name={i.name}
                price={i.price}
                brand={i.brand}
                model={i.model}
                img={i.imageUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductGrid;
