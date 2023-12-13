import { useSelector, useDispatch } from "react-redux";
import { updateSelectedCategory } from "../../redux/slices/CommerceSlice";
import { Card, CardTitle, CardImg, CardImgOverlay } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.CommerceSlice.Categories);
  const handleCat = (cate) => {
    // Log the current category value
    dispatch(updateSelectedCategory(cate)); // Use the current category value directly

    navigate("/products");
  };

  return (
    <div className="container ms-5  mb-5">
      <div className="row ms-5 gap-5">
        {categories.map((i) => {
          return (
            <div key={i.id} className="col-3">
              <Card
                onClick={() => handleCat(i.name)}
                style={{ cursor: "pointer" }}
                inverse
              >
                <CardImg
                  alt={i.name}
                  src={i.imageUrl}
                  style={{
                    height: 270,
                  }}
                  width="100%"
                />
                <CardImgOverlay>
                  <CardTitle tag="h4">{i.name}</CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
