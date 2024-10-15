import React, { PropsWithChildren, useState } from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Layout({ children }: PropsWithChildren) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "var(--red)",
          height: "60px",
        }}
        fixed="bottom"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="w-100" fill variant="pills" justify>
          <Nav.Item>
            <Nav.Link
              href="/home"
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src="Home-NavBar.svg"
                alt="Glossar"
                style={{ cursor: "pointer", width: "7vw" }}
              />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href="/glossary"
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src="Woerterbuch-NavBar.svg"
                alt="Glossar"
                style={{ cursor: "pointer", width: "7vw" }}
              />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as="div"
              className="d-flex justify-content-center align-items-center"
            >
              <img
                onClick={handleShow}
                src="3-Punkte-NavBar.svg"
                alt="Menu"
                style={{ cursor: "pointer", width: "7vw" }}
              />
            </Nav.Link>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  Einstellungen
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>Mach ich nachher :D</Offcanvas.Body>
            </Offcanvas>
          </Nav.Item>
        </Nav>
      </Navbar>
      <div
        style={{
          height: "calc(100vh - 60px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </>
  );
}
