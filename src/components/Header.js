import React from "react";
import { Container, Navbar } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Navbar color="dark" dark className="mb-5 py-3">
      <Container>
        <Link to="/" className="text-primary">
          PostList
        </Link>
      </Container>
    </Navbar>
  </header>
);

export default Header;
