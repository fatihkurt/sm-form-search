import { useState } from "react";
import { UserApi } from "../../api"
import { Button, Input, InputMessage } from "../../components";
import { useFormValidate } from "../../hooks/useFormValidate";
import { validations } from "./validations";

export default function UserAdd() {
  const [userForm, setUserForm] = useState({
    fullname: "",
    country: "",
    city: "",
    mail: "",
  });
  const [ isFormSubmitted, setFormSubmitted] = useState();

  const [validate, errors] = useFormValidate(validations);

  function setFormField(fieldName, fieldValue) {
    setFormSubmitted(false);
    userForm[fieldName] = fieldValue;
    setUserForm({ ...userForm });
  }

  async function handleSaveUser() {
    setFormSubmitted(false);
    try {
      const api = new UserApi;
      if (! validate(userForm)) {
        return;
      }
      api.addUser(userForm);
      setUserForm({
        fullname: "",
        country: "",
        city: "",
        mail: "",
      });
      setFormSubmitted(true);
    } catch (e) {
      console.log(e)
      // ...
    }
  }

  function renderTextField(fieldName) {
    return (
      <div>
        <Input
          value={userForm[fieldName]}
          onChange={(value) => setFormField(fieldName, value)}
        />
        {errors[fieldName] && (<InputMessage type="error">{errors[fieldName][0]}</InputMessage>)}
      </div>
    );
  }

  return (
    <div id="add-user">
      <h1>User Adding</h1>
      <div>
        <form className="app-form">
          {isFormSubmitted && <InputMessage type="success">User added succesfully.</InputMessage>}
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
            <Button title="Save" onClick={handleSaveUser} />
          </p>
        </form>
      </div>
    </div>
  );
}
