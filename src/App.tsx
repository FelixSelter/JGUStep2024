import { PropsWithChildren, useEffect, useState } from "react";
import {
  Button,
  Modal,
  Nav,
  NavDropdown,
  NavLink,
  ProgressBar,
  Table,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./App.module.css";

export default function Layout({ children }: PropsWithChildren) {
  const [showOffcanvas, SetShowOffcanvas] = useState(false);
  const [_, forceRefresh] = useState(0);
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);

  const hideOffcanvas = () => SetShowOffcanvas(false);

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
        <img
          src="/JGUStep2024/jgu.png"
          style={{ objectFit: "contain", maxWidth: "100vw" }}
        />
        <ProgressBar now={0} className={styles.progress} />
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          height: "calc(100vh - 70px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
      <div style={{ height: "70px" }}>
        <Navbar
          style={{
            backgroundColor: "var(--red)",
            height: "60px",
          }}
          fixed="bottom"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Nav className="w-100" fill justify>
            <Nav.Item onClick={hideOffcanvas}>
              <Nav.Link
                href="/JGUStep2024/#"
                className={"d-flex justify-content-center align-items-center"}
              >
                <img
                  src="/JGUStep2024/Home-NavBar.svg"
                  alt="Home"
                  style={{ cursor: "pointer", width: "7vw" }}
                />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item onClick={hideOffcanvas}>
              <Nav.Link
                href="/JGUStep2024/#glossary"
                className={"d-flex justify-content-center align-items-center"}
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
                className={"d-flex justify-content-center align-items-center"}
              >
                <img
                  onClick={() => SetShowOffcanvas(true)}
                  src="/JGUStep2024/3-Punkte-NavBar.svg"
                  alt="Menu"
                  style={{ cursor: "pointer", width: "7vw" }}
                />
              </Nav.Link>
              <Offcanvas show={showOffcanvas} onHide={hideOffcanvas}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                    Einstellungen
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <NavDropdown title="Sprache">
                    <NavDropdown.Item href="/#" onClick={hideOffcanvas}>
                      Deutsch
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={hideOffcanvas} disabled>
                      Englisch
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Item>
                    <Nav.Link onClick={() => setShowHelpModal(true)}>
                      Hilfe
                    </Nav.Link>
                    <Modal
                      show={showHelpModal}
                      onHide={() => setShowHelpModal(false)}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Hilfe</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Bei Fragen zu dieser WebApp bitte ein Issue auf unserer{" "}
                        <NavLink href="https://github.com/FelixSelter/JGUStep2024/issues">
                          Github
                        </NavLink>{" "}
                        Seite erstellen.
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="outline-secondary"
                          onClick={() => {
                            setShowHelpModal(false);
                            hideOffcanvas();
                          }}
                        >
                          Close Menu
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Nav.Item>
                  <Nav.Item onClick={hideOffcanvas}>
                    <Nav.Link href="/JGUStep2024/#forum">Q & A</Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={hideOffcanvas}>
                    <Nav.Link href="/JGUStep2024/#sources">Quellen</Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={hideOffcanvas}>
                    <Nav.Link href="/JGUStep2024/#license">Lizenz</Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={hideOffcanvas}>
                    <Nav.Link href="/JGUStep2024/#impressum">
                      Impressum
                    </Nav.Link>
                  </Nav.Item>
                </Offcanvas.Body>
              </Offcanvas>
            </Nav.Item>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}
