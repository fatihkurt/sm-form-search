import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchApi } from "../../api";
import { Pagination, SearchListItem } from "../../sections";

const PAGE_SIZE = 3;

export default function SearchList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q");

  useEffect(() => {
    if (typeof q === "string" && q.length > 0) {
      search(q);
    }
  }, [q]);


  const currentSearchData = useMemo(() => {
    if (searchResult.length <= PAGE_SIZE) return searchResult;
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return searchResult.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, searchResult]);

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
      <h1>Search Result</h1>
      <div className="search-list">
        {currentSearchData.map((item, idx) => (
          <SearchListItem key={idx} item={item} />
        ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={searchResult.length}
        pageSize={PAGE_SIZE}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
