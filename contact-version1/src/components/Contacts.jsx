import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: " John Doe",
          email: "jdoe@gmail.com",
          phone: "5555-55-5555"
        },
        {
          id: 2,
          name: "Karen wiliams",
          email: "karen@gmail.com",
          phone: "222-222-2222"
        },
        {
          id: 3,
          name: "henry johnson",
          email: "henry@gmail.com",
          phone: "1111-111-1111"
        }
      ]
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
