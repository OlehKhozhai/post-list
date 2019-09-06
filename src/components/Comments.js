import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { loadMoreItemsAction } from "../redux/actions/postActions";
import { connect } from "react-redux";
import {filterItems} from "../helpers/helpers";

const Comments = ({ comments, loadMoreItems, visibleItemCounter }) => (
  <>
    <h5 className="subtitle">Comments</h5>

    {filterItems(comments, visibleItemCounter).map(({ name, email, body }) => (
      <div key={name} className="comments-body">
        <div className="comments-header d-flex align-items-center justify-content-between">
          <p>{name}</p>
          <span>{email}</span>
        </div>
        <p>{body}</p>
      </div>
    ))}
    <Button className="mb-5" onClick={() => loadMoreItems("comment")}>
      Load more
    </Button>
  </>
);

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  loadMoreItems: PropTypes.func.isRequired,
  visibleItemCounter: PropTypes.number.isRequired
};
const mapStateToProps = ({ postList: { visibleItemCounter } }) => ({
  visibleItemCounter
});

export default connect(
  mapStateToProps,
  { loadMoreItems: loadMoreItemsAction }
)(Comments);
