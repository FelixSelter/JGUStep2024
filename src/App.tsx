import { PropsWithChildren, useEffect, useState } from "react";
import { Button, Modal, Nav, NavDropdown, ProgressBar } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./App.module.css";
import classNames from "classnames";

export default function Layout({ children }: PropsWithChildren) {
  const [showOffcanvas, SetShowOffcanvas] = useState(false);
  const [_, forceRefresh] = useState(0);
  const [modalShow, setModalShow] = useState<boolean>(false);

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
          <Nav.Item onClick={hideOffcanvas}>
            <Nav.Link
              href="/JGUStep2024/#"
              className={classNames(
                "d-flex justify-content-center align-items-center",
                styles.nav
              )}
            >
              <img
                src="/JGUStep2024/Home-NavBar.svg"
                alt="Glossar"
                style={{ cursor: "pointer", width: "7vw" }}
              />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item onClick={hideOffcanvas}>
            <Nav.Link
              href="/JGUStep2024/#glossary"
              className={classNames(
                "d-flex justify-content-center align-items-center",
                styles.nav
              )}
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
              className={classNames(
                "d-flex justify-content-center align-items-center",
                styles.nav
              )}
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
                  <Nav.Link onClick={() => setModalShow(true)}>Hilfe</Nav.Link>
                  <Modal show={modalShow} onHide={() => setModalShow(false)}>
                    <Modal.Header closeButton>
                      <Modal.Title>Hilfe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Bei Fragen zu dieser WebApp bitte an *** wenden.
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                          setModalShow(false);
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
                  <Nav.Link disabled>Quellen</Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={hideOffcanvas}>
                  <Nav.Link href="/JGUStep2024/#license">Lizenz</Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={hideOffcanvas}>
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
