import React from "react";
import { Form, Button } from "react-bootstrap";

function Login(props) {
  let user = {};

  return (
    <Form
      className="container"
      onSubmit={event => {
        event.preventDefault();

        user.email = user.email.value;
        user.password = user.password.value;
        console.log(user);

        fetch("/api/authenticate", {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => {
            if (res.status === 200) {
              props.history.push("/");
            } else {
              const error = new Error(res.error);
              throw error;
            }
          })
          .catch(err => {
            console.error(err);
            alert("Erro ao fazer login, por favor tente novamente");
          });
      }}
    >
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          ref={node => {
            user.email = node;
          }}
          required
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          ref={node => {
            user.password = node;
          }}
          required
        />
      </Form.Group>
      <Button type="submit" className="w-100">
        Entrar
      </Button>
    </Form>
  );
}

export default Login;
