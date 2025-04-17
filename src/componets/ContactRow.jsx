import React from "react";

//pulling in contact information for each contact
export default function ContactRow({ contact, setSelectedContactId }) {
    return (
      //event that when when a row is clicked, the row selected is in the setter
      <tr onClick={()=>setSelectedContactId(contact)}>
        {/* ..with the following selected info from the selcted json data */}
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }