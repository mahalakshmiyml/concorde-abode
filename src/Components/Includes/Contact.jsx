import React, { useState } from "react";
import { Button, Row, Col, Container, } from "react-bootstrap";
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
              <Form className="bg-white p-3 rounded shadow">
                <h4 className="py-3 text-center">
                  Get Our Experts Call
                </h4>
                <Row className="mb-3">
                  <Col md={12}>
                    <div className="mb-3">
                      <a
                        href="tel:08095999000"
                        className="btn btn-dark form-control fw-bold py-2"
                      >
                        <i className="fa fa-phone-volume"></i> +91 80959 99000
                      </a>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={12}>
                    <div className="mb-3">
                      <Field
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                      />
                      <small className="text-danger">
                        <ErrorMessage name="name" />
                      </small>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={12}>
                    <div className="mb-3">
                      <Field
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                      <small className="text-danger">
                        <ErrorMessage name="email" />
                      </small>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={12}>
                    <div className="mb-3">
                      <Field
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Enter phone number"
                      />
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
                        className="btn btn-warning text-white fw-bold form-control"
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
