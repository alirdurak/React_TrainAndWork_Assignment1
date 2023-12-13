import { Container, Row, Col, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#343a40",
        color: "#fff",
        padding: "40px 0",
      }}
    >
      <Container>
        <Row>
          <Col xs="12" sm="6" md="3">
            <NavLink href="/">Anasayfa</NavLink>
          </Col>
          <Col xs="12" sm="6" md="3">
            {" "}
            <NavLink href="/products">Ürünler</NavLink>
          </Col>
          <Col xs="12" sm="6" md="3">
            <NavLink href="/user">Kullanıcı Bilgileri</NavLink>
          </Col>
          <Col xs="12" sm="6" md="3">
            <h5>İletişim</h5>
            <p>Adres: Şirket adresi</p>
            <p>Email: info@eticaret.com</p>
            <p>Telefon: 123-456-7890</p>
          </Col>
        </Row>
        <hr style={{ backgroundColor: "#6c757d", margin: "20px 0" }} />
        <Row>
          <Col xs="12">
            <p>&copy; 2023 E-Ticaret Sitesi. Tüm hakları saklıdır.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
