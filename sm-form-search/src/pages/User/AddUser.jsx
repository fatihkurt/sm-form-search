import { useState } from "react";

export default function AddUser() {
  const [userForm, setUserForm] = useState({
    fullname: "",
    country: "",
    city: "",
    mail: "",
  });

  function setFormField(fieldName, fieldValue) {
    userForm[fieldName] = fieldValue;
    setUserForm({ ...userForm });
  }

  async function handleSaveUser() {
    // ...
  }

  function renderTextField(fieldName) {
    return (
      <input
        type="text"
        value={userForm[fieldName]}
        onChange={(e) => setFormField(fieldName, e.target.value)}
      />
    );
  }

  return (
    <div id="add-user">
      <h1>User Adding Form</h1>
      <div>
        <form className="app-form">
          <label>
            <span>Full Name</span>
            {renderTextField("fullname")}
          </label>
          <label>
            <span>Country</span>
            {renderTextField("country")}
          </label>
          <label>
            <span>City</span>
            {renderTextField("city")}
          </label>
          <label>
            <span>E-mail</span>
            {renderTextField("mail")}
          </label>
          <p>
            <button type="button" onClick={handleSaveUser}>
              Save
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
