import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchApi } from "../../api";
import { SearchListItem } from "../../sections";

export default function SearchList() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q");

  useEffect(() => {
    if (typeof q === "string" && q.length > 0) {
      search(q);
    }
  }, [q]);

  async function search(term) {
    try {
      const api = new SearchApi();
      const result = await api.search(term);
      setSearchResult(result);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div id="search-list">
        {searchResult.map((item, idx) => (
          <SearchListItem key={idx} item={item} />
        ))}
      </div>
    </>
  );
}
