import { useState } from "react";
import { CategoryApi } from "../../api";
import { Input, InputMessage } from "../../components";
import { useFormValidate } from "../../hooks/useFormValidate";
import { validations } from './validations'

export default function CategoryAdd(props) {
  const [categoryName, setCategoryName] = useState("");

  const [isFormSubmitted, setFormSubmitted] = useState();

  const [validate, errors] = useFormValidate(validations);

  function handleCategoryNameChange(catName) {
    setFormSubmitted(false);
    setCategoryName(catName);
  }

  async function handleSaveCategory() {
    setFormSubmitted(false);
    try {
      const api = new CategoryApi();
      if (!validate({ categoryName })) {
        return;
      }
      api.addCategory({ name: categoryName });
      setFormSubmitted(true);
      setCategoryName("");
    } catch (e) {
      // ...
    }
  }

  return (
    <div id="add-category">
      <h1>Category Adding</h1>
      <div>
        <form className="app-form">
          {isFormSubmitted && (
            <InputMessage type="success">
              Category added succesfully.
            </InputMessage>
          )}
          <label>
            <span>Category Name</span>
            <div>
              <Input
                value={categoryName}
                onChange={handleCategoryNameChange}
              />
              {errors.categoryName && (
                <InputMessage type="error">
                  {errors.categoryName[0]}
                </InputMessage>
              )}
            </div>
          </label>
          <p>
            <button type="button" onClick={handleSaveCategory}>
              Save
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
