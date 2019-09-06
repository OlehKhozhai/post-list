import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem, Spinner, Row, Button } from "reactstrap";
import PropTypes from "prop-types";

import {
  getPostsAction,
  loadMoreItemsAction
} from "../redux/actions/postActions";
import { Link } from "react-router-dom";
import { filterItems } from "../helpers/helpers";

class PostList extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { posts, loadMoreItems, visibleItemCounter } = this.props;

    if (!posts.length) {
      return <Spinner style={{ width: "3rem", height: "3rem" }} />;
    }

    return (
      <Row className="justify-content-center">
        <div className="col-12 col-lg-10">
          <ListGroup>
            {filterItems(posts, visibleItemCounter).map(
              ({ id, userId, title }) => (
                <ListGroupItem
                  key={id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <Link to={`/posts/${id}`}>{title}</Link>
                  <Link to={`/user/${userId}`} className="text-info">
                    Author
                  </Link>
                </ListGroupItem>
              )
            )}
          </ListGroup>
          <Button className="my-5" onClick={() => loadMoreItems("post")}>
            Load more
          </Button>
        </div>
      </Row>
    );
  }
}

PostList.propTypes = {
  visibleItemCounter: PropTypes.number.isRequired,
  posts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
  loadMoreItems: PropTypes.func.isRequired
};
const mapStateToProps = ({ postList: { postList, visibleItemCounter } }) => ({
  visibleItemCounter,
  posts: postList
});

const mapDispatchToProps = {
  getPosts: getPostsAction,
  loadMoreItems: loadMoreItemsAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
