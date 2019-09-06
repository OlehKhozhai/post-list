import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Spinner, Container, Row } from "reactstrap";

import {
  getPostAction,
  getPostCommentsAction
} from "../redux/actions/postActions";
import Comments from "./Comments";

class PostDetail extends Component {
  state = {};

  componentDidMount() {
    const {
      getPost,
      getPostComments,
      match: {
        params: { id }
      }
    } = this.props;

    getPost(+id);
    getPostComments(id);
  }

  render() {
    const {
      comments,
      isLoading,
      post: { title, body }
    } = this.props;

    if (isLoading) {
      return <Spinner style={{ width: "3rem", height: "3rem" }} />;
    }

    return (
      <Container>
        <Row className="justify-content-center">
          <div className="col-12 col-md-10">
            <article className="post-detail">
              <h4>{title}</h4>
              <p>{body}</p>
            </article>
            <Comments comments={comments} />
          </div>
        </Row>
      </Container>
    );
  }
}

PostDetail.propTypes = {
  match: PropTypes.object.isRequired,
  getPostComments: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

const mapStateToProps = ({
  postList: {
    isLoading,
    currentPost: { post, comments }
  }
}) => ({ post, comments, isLoading });

const mapDispatchToProps = {
  getPostComments: getPostCommentsAction,
  getPost: getPostAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
