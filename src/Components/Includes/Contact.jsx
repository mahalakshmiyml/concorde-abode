import React, { useState } from "react";
import { Button, Row, Col, Container, InputGroup, } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Contact = () => {
  const [formStatus, setformStatus] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("required").email("Invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
  });

  const onSubmit = (values) => {
    // const data = "";

    let data = {
      apikey: "897ec314-c85b-4291-96ee-48648d5dcfbd",
      firstname: values.name,
      lastname: "",
      source: "Concorde Abode",
      mobile: values.phone,
      CreatedDate: "17/02/2022",
      email: values.email,
      Remark: "Brochure Downloaded",
      ProjectUID: "2597B322-F920-442A-9050-127AFD565726",
    }

    // console.log(data);

    axios
      .post("https://buildeskapi.azurewebsites.net/api/Webhook", data
      )
      .then(function (response) {
        if (response.data.Success) {
          setformStatus("Thanks for contacting us. We will get back to you soon.");
        } else {
          setformStatus("Sorry!!! Something went wrong. Please try again")
        }
      })
      .catch(function (error) {
        setformStatus("Sorry!!! Something went wrong. Please try again")
      });
  };
  return (
    <div className="py-3 py-md-5 sticky-top" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} className="px-0">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="bg-info p-3 rounded shadow">
                <h2 className="pt-3 text-white text-center">
                  Need Help?
                </h2>
                <h6 className="text-white text-center mb-2">
                  Enquire Now!!!
                </h6>
                <Row className="mb-3">
                  <Col md={12}>
                    <div className="mb-3">
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1" className="bg-white border-end-0">
                        <i className="fa fa-user text-info"></i>
                      </InputGroup.Text>
                      <Field
                        className="form-control border-start-0"
                        type="text"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="name"
                        name="name"
                        placeholder="Name"
                      />
                    </InputGroup>
                      <small className="text-danger">
                        <ErrorMessage name="name" />
                      </small>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={12}>
                    <div className="mb-3">
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1" className="bg-white border-end-0">
                        <i className="fa fa-envelope text-info"></i>
                      </InputGroup.Text>
                      <Field
                        className="form-control border-start-0"
                        type="email"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                    </InputGroup>
                      <small className="text-danger">
                        <ErrorMessage name="email" />
                      </small>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={12}>
                    <div className="mb-3">
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1" className="bg-white border-end-0">
                        <i className="fa fa-phone-volume text-info"></i>
                      </InputGroup.Text>
                      <Field
                        className="form-control border-start-0"
                        type="tel"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="phone"
                        name="phone"
                        placeholder="Phone No."
                      />
                    </InputGroup>
                      <small className="text-danger">
                        <ErrorMessage name="phone" />
                      </small>
                    </div>
                  </Col>
                </Row>
                <Row className="">
                  <Col md={12}>
                    {formStatus ? (
                      <div className="alert alert-success p-3 text-center">
                        {formStatus}
                      </div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={12}>
                    <div className="">
                      <Button
                        className="btn btn-dark text-white fw-bold form-control"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
