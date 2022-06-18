import React, { useState } from "react";
import { Button, Modal, Row, Col, Image, InputGroup } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Logo from "../../images/logo-1.png";
import { Link, useNavigate } from "react-router-dom";
import CountryDropdown from "country-dropdown-with-flags-for-react";

const BrochureModal = (props) => {
  const [formStatus, setformStatus] = useState("");
  const [Download, setDownload] = useState(false);
  const navigate = useNavigate("/success");

  const initialValues = {
    name: "",
    // email: "",
    phone: "",
    id: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    // email: Yup.string().required("required").email("Invalid email format"),
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
      source: "Concorde Abode",
      mobile: values.phone,
      CreatedDate: "17/02/2022",
      email: "",
      Remark: "Brochure Downloaded",
      ProjectUID: "2597B322-F920-442A-9050-127AFD565726",
    };

    axios
      .post("https://buildeskapi.azurewebsites.net/api/Webhook", data)
      .then(function (response) {
        if (response.data.Success) {
          setformStatus("Thank you for downloading the Brochure.");
          setDownload(true);
        } else {
          setformStatus("Sorry!!! Something went wrong. Please try again");
        }
      })
      .catch(function (error) {
        setformStatus("Sorry!!! Something went wrong. Please try again");
      });
  };
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose} centered id="cre">
        <Modal.Header closeButton className="border-0 bg-info">
          <Modal.Title className="text-white text-titlecase border-0 ms-auto">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="py-1 text-center">{props.message}</h6>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="px-3 py-1 rounded">
              <Row className="mb-2">
                <Col md={12}>
                  <div className="mb-2">
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
                  </div>
                </Col>
                <small className="text-danger">
                  <ErrorMessage name="name" />
                </small>
              </Row>
              {/* <Row className="mb-2">
                  <Col md={12}>
                    <div className="mb-2">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                          <i className="fa fa-envelope text-primary"></i>
                        </InputGroup.Text>
                        <Field
                          className="form-control"
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                        />
                      </InputGroup>
                    </div>
                  </Col>
                  <small className="text-danger">
                    <ErrorMessage name="email" />
                  </small>
                </Row> */}
              <Row className="mb-2">
                <Col md={12}>
                  <div className="mb-2">
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1" className=" bg-white border-end-0">
                        <i className="fa fa-phone-volume text-info"></i>
                      </InputGroup.Text>
                      <Field
                        className="form-control border-start-0"
                        type="tel"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                      />
                    </InputGroup>
                  </div>
                </Col>
                <small className="text-danger">
                  <ErrorMessage name="phone" />
                </small>
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
                    {Download ? (
                      <a
                        className="btn btn-info text-white fw-bold form-control"
                        href="https://theprestigecitysarjapur.com/prestige-meridian-park.pdf" target="_blank"
                      >
                        Download Brochure
                      </a>
                    ) : (
                      <Button
                        className="btn btn-info text-white fw-bold form-control"
                        type="submit"
                      >
                        Submit
                      </Button>
                    )}
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

export default BrochureModal;
