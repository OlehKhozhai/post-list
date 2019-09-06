import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Card, CardText, Row, Spinner } from "reactstrap";

import { getUserAction } from "../redux/actions/userActions";
import Author from "../assets/icons/author.svg";

class UserDetail extends Component {
  state = {};

  componentDidMount() {
    const { match, getUser } = this.props;
    getUser(match.params.id);
  }

  render() {
    const { user } = this.props;

    if (!Object.keys(user).length) return null;

    const {
      isLoading,
      user: {
        email,
        name,
        phone,
        username,
        website,
        address: { city, street, zipcode },
        company: { bs, catchPhrase, name: companyName }
      }
    } = this.props;

    if (isLoading) {
      return <Spinner style={{ width: "3rem", height: "3rem" }} />;
    }

    return (
      <Row className="justify-content-center mb-5">
        <div className="col-12 col-md-9 col-lg-7">
          <Card>
            <div className="user-avatar">
              <img src={Author} alt="Card" />
            </div>
            <h4 className="user-name">{name}</h4>
            <CardText>
              <span>nickname:</span> <b>{username}</b>
            </CardText>
            <CardText>
              <span>phone:</span> <b>{phone}</b>
            </CardText>
            <CardText>
              <span>email:</span> <b>{email}</b>
            </CardText>
            <CardText>
              <span>website:</span> <b>{website}</b>
            </CardText>
            <CardText>
              <span>address:</span> {city}, {street}, {zipcode}
            </CardText>
            <CardText>
              <span>company name:</span> {companyName}
            </CardText>
            <CardText>
              <span>responsible:</span> {bs}
            </CardText>
            <CardText>
              <span>Catch phrase:</span> {catchPhrase}
            </CardText>
          </Card>
        </div>
      </Row>
    );
  }
}

UserDetail.propTypes = {
  user: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

const mapStateToProps = ({ user }) => ({
  user: user.data,
  isLoading: user.isLoading
});
const mapDispatchToProps = { getUser: getUserAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);
