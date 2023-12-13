import { useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useSelector } from "react-redux";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.UserSlice.users);

  const handleSign = () => {
    if (
      users.forEach((i) => {
        i.email == email;
      })
    ) {
      alert("Bu kullanıcı mevcut!");
    } else {
      const userData = {
        id: nanoid(),
        username: username,
        password: password,
        email: email,
        name: "",
        surname: "",
        phone: "0555 555 55 55",
        address: "İstanbul, Türkiye",
        createdAt: new Date(),
        updatedAt: new Date(),
        favorited_items: [],
        basket: [],
      };
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Sunucudan gelen yanıt:", data);
        })
        .catch((error) => {
          console.error("Hata oluştu:", error);
        });
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center mt-5 mb-5">
      <Card>
        <CardBody>
          <CardTitle className="text-center" tag="h5">
            Giriş Yap
          </CardTitle>
          <Form className="text-center">
            <FormGroup className="text-center">
              <Label for="username">Kullanıcı Adı</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Kullanıcı Adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="text-center">
              <Label for="email">Email </Label>
              <Input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="text-center">
              <Label for="password">Şifre</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button color="dark" onClick={handleSign}>
              Kayıt Ol
            </Button>
          </Form>
        </CardBody>
      </Card>
      <span>
        Hesabın var mı? <Link to="/login">Giriş yap</Link>
      </span>
    </Container>
  );
};

export default SignupForm;
