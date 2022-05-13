import React, { useState } from "react";
import { Button, Modal, Row, Col, Image } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Logo from "../../images/logo-1.png";
import {useNavigate} from "react-router-dom";

const Modals = (props) => {
  const [formStatus, setformStatus] = useState("");
  const navigate = useNavigate("/success");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    id:""
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
    const data = {
      apikey: "897ec314-c85b-4291-96ee-48648d5dcfbd",
      firstname: values.name,
      lastname: "",
      source: "Concorde Abode 99",
      mobile: values.phone,
      CreatedDate: "17/02/2022",
      email: values.email,
      Remark: "Brochure Downloaded",
      ProjectUID: "2597B322-F920-442A-9050-127AFD565726",
    }

    axios
      .post(
        "https://buildeskapi.azurewebsites.net/api/Webhook",
        data
      )
      .then(function (response) {
        if (response.data.Success){
          
        setformStatus("Thank you for contacting us. We'll reach you soon.");
        navigate("/success");
        } else {
          setformStatus("Sorry!!! Something went wrong. Please try again")
        }
      })
      .catch(function (error) {
        setformStatus("Sorry!!! Something went wrong. Please try again")
      });
  };
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose} centered id="cre">
        <Modal.Header closeButton className="border-0 bg-primary">
          <Modal.Title className="text-white text-titlecase border-0">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center py-3">
            <Image src={Logo} alt="" className="img-fluid" />
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="p-3">
              <Row className="mb-3">
                {/* <Col md={2} className="p-0">
                  <div className="text-end py-2">
                    <FontAwesomeIcon
                      icon="fas fa-user"
                      className="border-0 fs-4 rounded text-primary"
                    />
                  </div>
                </Col> */}
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
                {/* <Col md={2} className="p-0">
                  <div className="text-end py-2">
                    <FontAwesomeIcon
                      icon="fas fa-envelope"
                      className="border-0 fs-4 rounded text-primary"
                    />
                  </div>
                </Col> */}
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
                {/* <Col md={2}>
                  <div className="text-center">
                    <CountryDropdown
                      id="UNIQUE_ID"
                      className="YOUR_CSS_CLASS form-control border ps-0 pe-3 py-2"
                      preferredCountries={["in", "gb"]}
                      value=""
                      handleChange={(e) => console.log(e.target.value)}
                    ></CountryDropdown>
                  </div>
                </Col> */}
                <Col md={12}>
                  <div className="mb-3">
                    <Field
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Phone number"
                    />

                    <small className="text-danger">
                      <ErrorMessage name="phone" />
                    </small>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                {/* <Col md={2}>
                  <div className="text-center">
                    <CountryDropdown
                      id="UNIQUE_ID"
                      className="YOUR_CSS_CLASS form-control border ps-0 pe-3 py-2"
                      preferredCountries={["in", "gb"]}
                      value=""
                      handleChange={(e) => console.log(e.target.value)}
                    ></CountryDropdown>
                  </div>
                </Col> */}
                <Col md={12}>
                  <div className="">
                    <Field
                      type="hidden"
                      className="form-control"
                      id="id"
                      name="id"
                      placeholder="Phone number"
                      value={props.projectid}
                    />

                    <small className="text-danger d-none">
                      <ErrorMessage name="id" />
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
              <Row className="">
                <Col md={12}>
                  <div className="">
                    <Button
                      className="btn btn-success text-white text-uppercase form-control"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Modals;
