import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      style={{ width: "100%" }}
      expand="md"
      color="dark"
      dark
      className="container-fluid"
      {...args}
    >
      <NavbarBrand href="/">Logo</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="me-auto">
          <NavItem>
            <NavLink href="/">Anasayfa</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/products">Ürünler</NavLink>
          </NavItem>
        </Nav>
        <Nav navbar className="ms-auto">
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Kullanıcı
            </DropdownToggle>
            <DropdownMenu dark end>
              <DropdownItem>
                <NavLink href="/user">Kullanıcı Bilgileri</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/basket">Sepet</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/login">Giriş yap</NavLink>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavLink href="/">Çıkış Yap</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
