import { useState } from "react";
import ContactList from "./componets/contactList";
import "./App.css";
import SelectedView from "./componets/SelectedView";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  // selectContactId is the entire information being held in one contact ""file""
   console.log(selectedContactId);
  return (
    <>
    {/* if selectedContactId value is true */}
      {selectedContactId ? (
        // SelectedView will render contact info that was saved using the setter (the view of when you click into the contact)
        <SelectedView selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
      ) : (
        //else, the overall contact page list will show
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}