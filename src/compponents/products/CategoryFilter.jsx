import { ListGroup, ListGroupItem } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  updateSelectedCategory,
  updateShownProducts,
} from "../../redux/slices/CommerceSlice";

function CategoryFilter() {
  const dispatch = useDispatch();
  const cats = useSelector((state) => state.CommerceSlice.Categories);
  const selectedCat = useSelector(
    (state) => state.CommerceSlice.SelectedCategory
  );

  const handleCat = (cate) => {
    dispatch(updateSelectedCategory(cate));
  };

  useEffect(() => {
    dispatch(updateShownProducts());
  }, [selectedCat, dispatch]);
  return (
    <div style={{ position: "sticky" }}>
      <ListGroup>
        <ListGroupItem
          style={{ cursor: "pointer" }}
          color="secondary"
          active={selectedCat === ""}
          onClick={() => handleCat("")}
        >
          Tüm Ürünler
        </ListGroupItem>
        {cats.map((i) => {
          return (
            <ListGroupItem
              style={{ cursor: "pointer" }}
              color="secondary"
              active={i.name === selectedCat}
              onClick={() => handleCat(i.name)}
              key={i.id}
            >
              {i.name}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default CategoryFilter;
