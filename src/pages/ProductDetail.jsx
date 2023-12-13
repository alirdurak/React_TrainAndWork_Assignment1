import Layout from "../compponents/layout/Layout";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedProduct } from "../redux/slices/CommerceSlice";
import { useEffect } from "react";
import { Col, Container, Row, Button } from "reactstrap";
import { addCartItem, favoriteMethod } from "../redux/slices/UserSlice";

function ProductDetail() {
  const location = useLocation();
  const dispatch = useDispatch();
  let data;
  useEffect(() => {
    dispatch(updateSelectedProduct(location.pathname.slice(9)));
  }, [dispatch, location.pathname]);

  const addBasket = (item) => {
    dispatch(addCartItem(item));
  };
  const favorite = (item) => {
    dispatch(favoriteMethod(item));
  };
  data = useSelector((state) => state.CommerceSlice.SelectedProduct);
  console.log(data);
  return (
    <Layout>
      <Container>
        <Row className="">
          <h2 className="ms-5">{data.brand + " " + data.name}</h2>
          <Col className="d-flex">
            <div style={{ width: "60%" }} className=" rounded-2 p-5">
              <img
                className="rounded-2 w-100"
                src={data.imageUrl}
                alt={data.brand + data.model}
              />
            </div>
            <div style={{ width: "30%" }} className="  ">
              <h3 className=" ">{data.brand + " " + data.model}</h3>
              <div className="d-inline-flex justify-content-evenly  mt-3 gap-3 ">
                <span className="muted text-secondary p-2">{data.price}</span>
                <Button onClick={() => addBasket(data)} size="sm">
                  Sepete Ekle
                </Button>

                <Button onClick={() => favorite(data)} color="danger" size="sm">
                  Favori
                </Button>
              </div>
              <p className="mt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
                nihil porro labore deserunt voluptatibus vel maxime error,
                numquam sed culpa ullam dolores omnis harum voluptates ab
                asperiores unde ut ducimus. Ab blanditiis impedit, nobis
                doloremque enim ducimus eveniet voluptas vel optio? A reiciendis
                odit corrupti quidem ad maxime nisi sed dolore architecto
                tempore? Harum minima sit fuga hic in asperiores? Velit
                blanditiis, consequatur similique, impedit ducimus eius ab ut
                dolore eaque neque voluptatibus. Sed maxime error repellat.
                Provident, officiis, commodi corrupti error, quae ea dignissimos
                reprehenderit eaque tempore odit quam.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default ProductDetail;
