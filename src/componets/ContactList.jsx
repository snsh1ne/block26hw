import { useState } from "react";
import ContactRow from "./ContactRow";
import { useEffect } from "react";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({setSelectedContactId}) {
  const [contacts, setContacts] = useState(dummyContacts);
  let [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchContacts() {
      try {
        //fetching data from the api we are using
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        //putting the fretched data in json format
        const result = await response.json();
        //saving the data pulled from the api in json format
        setContacts(result);
      } catch (error) {
        //shwoing error if the try block doesnt work/something is wrong 
        console.error(error);
      }
    }
    //calling function to run
    fetchContacts();
  }, []);
  // [] above is dependancy array, will trigger a coponent rerender when some value is modified inside it
// console.log('THIS IS THE GETTER', contacts);
// console.log('THIS IS THE SETTER', setContacts);
let localTotal = 0
  function addOne () {
    localTotal += 1
    setCount(count += 1)
    
  }
console.log('LOCAL', localTotal);
console.log('STATE VAR', count);
  return (
    <>
    <button onClick={() => addOne()}>Add one </button>
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {/* array method where for every contact object, 
        a contact row componet is set and sent to ContactRow*/}
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>;
        })}
      </tbody>
    </table>
          </>
  );
}
