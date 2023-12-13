import { Button, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem } from "../redux/slices/UserSlice";

const UserBasket = () => {
  const basket = useSelector((state) => state.UserSlice.currentUser.basket);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const calculateTotalPrice = () => {
    let price = 0;
    basket.forEach((i) => {
      price += Number(i.price.split(" ")[0]);
    });
    return price;
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Alışveriş Sepeti</h2>
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>Ürün Adı</th>
            <th>Adet</th>
            <th>Fiyat</th>
            <th>Toplam</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>

              <td>{item.price} TL</td>

              <td>
                <Button color="danger" onClick={() => removeItem(item.id)}>
                  Kaldır
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-right">
        <strong>Toplam Fiyat:</strong> {calculateTotalPrice()} TL
      </div>
    </div>
  );
};

export default UserBasket;
