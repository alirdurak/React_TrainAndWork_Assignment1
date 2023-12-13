import ProductGrid from "../compponents/products/ProductGrid";
import CategoryFilter from "../compponents/products/CategoryFilter";
import Layout from "../compponents/layout/Layout";

function Products() {
  return (
    <Layout>
      <div className="container-fluid d-flex mb-5">
        <CategoryFilter />
        <ProductGrid />
      </div>
    </Layout>
  );
}

export default Products;
