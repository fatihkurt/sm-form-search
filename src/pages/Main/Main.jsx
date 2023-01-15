import {
  createSearchParams,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { SearchForm } from "../../sections";

export default function Main() {
  const navigate = useNavigate();

  function handleSearch(term) {
    navigate(
      {
        pathname: "search",
        search: createSearchParams({
          q: term,
        }).toString(),
      },
      { replace: true }
    );
  }

  return (
    <>
      <div id="sidebar">
        <div>
          <SearchForm onSearch={handleSearch} />
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/user/new`}>Add User</Link>
            </li>
            <li>
              <Link to={`/category/new`}>Add Category</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
