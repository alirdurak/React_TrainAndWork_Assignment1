/* eslint-disable react/prop-types */
import Header from "./Header";
import Footer from "./Footer";
import {
  fetchCategories,
  fetchProducts,
} from "../../redux/slices/CommerceSlice";
import { fetchUsers } from "../../redux/slices/UserSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
function Layout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}

export default Layout;
