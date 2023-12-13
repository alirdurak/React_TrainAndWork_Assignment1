import { useState } from "react";
import { Link } from "react-router-dom";
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
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentUser } from "../../redux/slices/UserSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.UserSlice.users);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (users.find((i) => i.email == email && i.password == password)) {
      alert("Giriş Başarılı");
      dispatch(updateCurrentUser(users.find((i) => i.email == email)));
    } else {
      alert("girilen bilgiler hatalı");
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
            <Button color="dark" onClick={handleLogin}>
              Giriş Yap
            </Button>
          </Form>
        </CardBody>
      </Card>
      <span>
        Henüz bir hesabınız yoksa <Link to="/signup">kaydolun</Link>
      </span>
    </Container>
  );
};

export default LoginForm;
