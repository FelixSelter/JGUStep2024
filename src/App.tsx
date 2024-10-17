import { PropsWithChildren, useEffect, useState } from "react";
import { Nav, NavDropdown, ProgressBar } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./App.module.css";

export default function Layout({ children }: PropsWithChildren) {
  const [show, setShow] = useState(false);
  const [_, forceRefresh] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setTimeout(() => {
      window.sessionStorage.showedLogoPopup = true;
      forceRefresh(1);
    }, 1000);
  }, []);

  if (window.sessionStorage.showedLogoPopup === undefined) {
    return (
      <div
        style={{
          backgroundColor: "var(--red)",
          width: "100vw",
          height: "100vh",
          display: "flex",
        }}
      >
        <img src="/JGUStep2024/jgu.png" style={{ objectFit: "contain" }} />
        <ProgressBar now={0} className={styles.progress} />
      </div>
    );
  }

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
              href="/JGUStep2024/#"
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src="/JGUStep2024/Home-NavBar.svg"
                alt="Glossar"
                style={{ cursor: "pointer", width: "7vw" }}
              />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              href="/JGUStep2024/#glossary"
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src="/JGUStep2024/Woerterbuch-NavBar.svg"
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
                src="/JGUStep2024/3-Punkte-NavBar.svg"
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
              <Offcanvas.Body>
                <NavDropdown title="Sprache">
                  <NavDropdown.Item href="#action3">Deutsch</NavDropdown.Item>
                  <NavDropdown.Item href="#action4" disabled>
                    Englisch
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5" disabled>
                    Schweizerdeutsch
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Nav.Link>Hilfe</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Q & A</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Quellen</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/JGUStep2024/#license">Lizenz</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/JGUStep2024/#impressum">Impressum</Nav.Link>
                </Nav.Item>
              </Offcanvas.Body>
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
