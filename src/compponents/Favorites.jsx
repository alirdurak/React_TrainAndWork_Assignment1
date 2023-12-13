import { useSelector } from "react-redux";
import ProductCard from "./products/ProductCard";

function Favorites() {
  const products = useSelector(
    (state) => state.UserSlice.currentUser.favorited_items
  );
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

export default Favorites;
