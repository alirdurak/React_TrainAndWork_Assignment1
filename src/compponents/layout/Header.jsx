import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedCategory } from "../../redux/slices/CommerceSlice";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.UserSlice.currentUser);

  const toggle = () => setIsOpen(!isOpen);

  const resetCat = () => {
    dispatch(updateSelectedCategory(""));
  };

  return (
    <Navbar
      style={{ width: "100%" }}
      expand="md"
      color="dark"
      dark
      className="container-fluid mb-5"
    >
      <NavbarBrand href="/">Logo</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="me-auto d-flex gap-4">
          <NavItem>
            <Link className="text-secondary text-decoration-none link" to="/">
              Anasayfa
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className="text-secondary text-decoration-none link"
              onClick={resetCat}
              to="/products"
            >
              Ürünler
            </Link>
          </NavItem>
        </Nav>
        <Nav navbar className="ms-auto">
          (
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Kullanıcı
            </DropdownToggle>
            <DropdownMenu dark end>
              {user && (
                <DropdownItem>
                  <Link
                    className="text-secondary text-decoration-none link"
                    to="/user"
                  >
                    Kullanıcı Bilgileri
                  </Link>
                </DropdownItem>
              )}
              {user && (
                <DropdownItem>
                  <Link
                    className="text-secondary text-decoration-none link"
                    to="/basket"
                  >
                    Sepet
                  </Link>
                </DropdownItem>
              )}
              <DropdownItem>
                <Link
                  className="text-secondary text-decoration-none link"
                  to="/login"
                >
                  Giriş yap
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              {user && (
                <DropdownItem className="link">
                  <Link
                    className="text-secondary text-decoration-none link"
                    to="/"
                  >
                    Çıkış Yap
                  </Link>
                </DropdownItem>
              )}
            </DropdownMenu>
          </UncontrolledDropdown>
          )
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
