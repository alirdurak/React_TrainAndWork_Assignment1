/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  CardHeader,
  CardFooter,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function ProductCard({ id, name, price, brand, model, img }) {
  return (
    <Link className="link-dark link-underline-opacity-0" to={`/product/${id}`}>
      <Card style={{ height: "90%", cursor: "pointer" }}>
        <CardHeader style={{ height: "10%" }}>
          <CardTitle tag="h5">{brand}</CardTitle>
        </CardHeader>
        <CardBody style={{ height: "60%", minHeight: "60%" }}>
          <CardImg
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            alt={name}
            src={img}
          />
        </CardBody>
        <CardFooter style={{ height: "25%" }}>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {brand + " " + model + " " + name}
          </CardSubtitle>
        </CardFooter>
        <CardText className="text-center bg-info">{price}</CardText>
      </Card>
    </Link>
  );
}
