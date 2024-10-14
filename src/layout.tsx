import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

export default function Layout({ children }: { children: React.ReactNode[] }) {
  return (
    <Navbar>
      <Container>{children}</Container>
    </Navbar>
  );
}
