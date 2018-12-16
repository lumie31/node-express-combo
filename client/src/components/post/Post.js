import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getPost } from "../../actions/postActions";

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1 style={{ marginTop: "10vh" }}>Single Post here</h1>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    post: state.post
  };
};

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
