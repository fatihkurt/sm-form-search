import { useState } from "react";
import { Button, Input } from "../../components";

export default function SearchForm(props) {
  const [term, setTerm] = useState(props.term || "");

  function handleSearch() {
    props.onSearch && props.onSearch(term);
  }

  return (
    <div className="search-form" role="search">
      <Input
        aria-label="Search"
        placeholder="Search"
        type="search"
        value={term}
        onChange={setTerm}
      />
      <Button
        title="Search"
        disabled={term.length < 3}
        onClick={handleSearch}
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
}
