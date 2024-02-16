import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.css"; // Importa tus estilos si los tienes

export const Contact = (props) => {
  return (
    <>
      <div className="bodyFormulario">
        <h1 className="text-fm">¿En que te podemos ayudarte?</h1>
        <Form className="custom-form text-fm">
          <h1> </h1>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ingresa tu correo</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Dejar tu comentario</Form.Label>
            <Form.Control placeholder="Comentario" as="textarea" rows={3} />
          </Form.Group>
          <Button variant="danger" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </>
  );
};

Contact.propTypes = {};
