import React from "react";

import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "../Footer/Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="section-line"></div>
      <footer className="footer d-flex ">
        <Container>
          <Row>
            <Col lg={5} sm={12} className="footer-links">
              <ul className="d-flex ">
                <li>
                  <div className="div-links">
                    <a
                      href="https://www.compasscollect.com/about-compass"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="What we do"
                    >
                      WHAT WE DO
                    </a>
                    <a
                      href="https://www.compasscollect.com/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Contact us"
                    >
                      CONTACT US
                    </a>
                  </div>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      PROJECTS
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        href="https://www.compasscollect.com/past-projects"
                        title="Past projects"
                      >
                        PAST PROJECTS
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="https://www.compasscollect.com/current-projects"
                        title="Current projects"
                      >
                        CURRENT PROJECTS
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li>
                  <div className="div-links">
                    <a
                      href="https://www.compasscollect.com/team"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Meet the team"
                    >
                      COMPASS TEAM
                    </a>
                  </div>
                </li>
              </ul>
            </Col>
            <Col lg={3} sm={12} className="social">
              <div>
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/compasscollect/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        color="var(--main-bg-color)"
                        size="2x"
                        title="Instagram"
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://twitter.com/Compasscollect2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        color="var(--main-bg-color)"
                        size="2x"
                        title="Twitter"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/compasscollect"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        color="var(--main-bg-color)"
                        size="2x"
                        title="Facebook"
                      />
                    </a>
                  </li>

                  <li>
                    {/* <a
                      href="https://www.youtube.com/channel/UCZBalasefhzsdQ2dWtlZCuw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faYoutube}
                        color="var(--main-bg-color)"
                        size="2x"
                        title="Youtube"
                      />
                    </a> */}
                  </li>
                </ul>
              </div>
            </Col>
            <Col col={3} className="survey-btn">
              <div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfF8jKCoLqanEIJkZjksnDmZpniMiH4Z5ImMA0gtHgEqLhCzA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Survey"
                >
                  GIVE US FEEDBACK
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};