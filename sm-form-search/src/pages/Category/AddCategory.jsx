import { useState } from "react";
import { CategoryApi } from "../../api";

export default function AddCategory(props) {
  const [categoryName, setCategoryName] = useState("");

  function handleCategoryNameChange(e) {
    const catName = e.target.value;
    setCategoryName(catName);
  }

  async function handleSaveCategory() {
    try {
      const api = new CategoryApi();
      api.addCategory({ name: categoryName });
      setCategoryName("");
    } catch(e) {
      throw e;
    }
  }

  return (
    <div id="add-category">
      <h1>Category Adding Form</h1>
      <div>
        <form className="app-form">
          <label>
            <span>Category Name</span>
            <input
              type="text"
              value={categoryName}
              onChange={handleCategoryNameChange}
            />
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
