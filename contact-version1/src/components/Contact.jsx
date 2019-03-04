import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showContactInfo: false
    };
  }
  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };
  render() {
    const { contact } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>
          {contact.name}{" "}
          <i
            style={{ cursor: "pointer" }}
            onClick={this.onShowClick}
            className="fas fa-sort-down"
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick}
          />
        </h4>
        {this.state.showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {contact.email}</li>
            <li className="list-group-item">Phone : {contact.phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
