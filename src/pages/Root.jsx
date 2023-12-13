import { useEffect } from "react";
import Layout from "../compponents/layout/Layout";

import Banner from "../compponents/mainpage/Banner";
import Categories from "../compponents/mainpage/Categories";
import { fetchCategories, fetchProducts } from "../redux/slices/CommerceSlice";
import { useDispatch } from "react-redux";

const Root = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <Layout>
      <div className="container ">
        <Banner></Banner>
        <Categories></Categories>
      </div>
    </Layout>
  );
};

export default Root;
