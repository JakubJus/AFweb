import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContactUs.scss";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 20000); // 20 seconds timeout

    return () => clearTimeout(timer);
  }, [successMessage, errorMessage]);

  const handleNameChange = (e) => {
    setName(e.target.value);
    clearMessages();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    clearMessages();
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    clearMessages();
  };

  const clearMessages = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Admin", // Change this to the actual recipient's name if needed
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_leihk7q",
        "template_jw20e0e",
        templateParams,
        "O_hYtvnIZayNuEZsH"
      )
      .then(
        (response) => {
          console.log(
            t("contactUs.successMessage"),
            response.status,
            response.text
          );
          setSuccessMessage(t("contactUs.successMessage"));
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error(
            t("contactUs.errorMessage"),
            error
          );
          setErrorMessage(t("contactUs.errorMessage"));
        }
      );
  };

  return (
    <div className="box">
      <div>
        <Row>
          <Col>
            <h1>{t("contactUs.title")}</h1>
            <hr />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">{t("contactUs.getInTouch")}</h3>
            <p>{t("contactUs.description")}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            <form className="contact__form w-100" onSubmit={handleSubmit}>
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    required
                    placeholder={t("contactUs.enterName")}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    placeholder={t("contactUs.enterEmail")}
                  />
                </Col>
              </Row>
              <div className="form-group">
                <textarea
                  className="form-control rounded-0"
                  id="message"
                  name="message"
                  rows="5"
                  value={message}
                  onChange={handleMessageChange}
                  required
                  placeholder={t("contactUs.typeMessage")}
                ></textarea>
              </div>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    {t("contactUs.send")}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactUs;