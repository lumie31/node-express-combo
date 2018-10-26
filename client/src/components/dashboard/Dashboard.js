import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../App.css";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    return (
      <div>
        <h2 className="dashboard">Dashboard</h2>
      </div>
    );
  }
}
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired
};
export default connect(
  null,
  { getCurrentProfile }
)(Dashboard);
