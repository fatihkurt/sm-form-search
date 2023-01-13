import { Outlet, Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div id="sidebar">
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <div>
            <button type="submit">Search</button>
          </div>
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
