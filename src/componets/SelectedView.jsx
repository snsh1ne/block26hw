

function SelectedView ({ selectedContactId, setSelectedContactId}) {
// information saved from the designated variable that the setter updates to is being called
    return (
        <>
        <div>
            <h2>{selectedContactId.name}</h2>
            <h2>{selectedContactId.email}</h2>
            <h2>{selectedContactId.phone}</h2>
            {/* sending flase value back to the ternary in app.jsx when clicked */}
            <button onClick={() => setSelectedContactId(false)}>Go back</button>
        </div>
        </>
    )
}

export default SelectedView