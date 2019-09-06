import React from "react";
import { Link, Redirect, Route, Switch, withRouter } from "react-router-dom";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

import PostList from "./PostList";
import PostDetail from "./PostDetail";
import User from "./UserDetail";
import Header from "./Header";

const App = ({ location: { pathname } }) => (
  <div>
    <Header />
    <Container>
      {pathname !== "/" && (
        <Link className="mb-5 btn btn-dark" to="/">
          Back
        </Link>
      )}

      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/posts/:id" component={PostDetail} />
        <Route exact path="/user/:id" component={User} />
        <Redirect to="/" />
      </Switch>
    </Container>
  </div>
);

App.propTypes = {
  location: PropTypes.object
};

export default withRouter(App);
