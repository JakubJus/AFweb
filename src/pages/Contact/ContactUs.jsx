import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContactUs.scss";
import { contactConfig } from "./content_options"; // Import contactConfig

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("http://localhost:3001/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
      });

      if (response.ok) {
        console.log("Message submitted successfully!");

        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Error submitting message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="box">
    <Container>
      <Row >
        <Col>
          <h1 >Contact Us!</h1>
          <hr/>
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4">Get in touch</h3>
          <p>{contactConfig.description}</p>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
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
                  placeholder="Enter your name"
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
                  placeholder="Enter your email"
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
                placeholder="Type your message"
              ></textarea>
            </div>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button className="btn ac_btn" type="submit">
                  Send
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ContactUs;