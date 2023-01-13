import { useState } from 'react'

export default function AddCategory(props) {

  const [categoryName, setCategoryName] = useState("");

  function handleCategoryNameChange(e) {
    const catName = e.target.value;
    setCategoryName(catName);
  }

  async function handleSaveCategory() {
    // ...
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
            <button type="submit" onClick={handleSaveCategory}>Save</button>
          </p>
        </form>
      </div>
    </div>
  );
}