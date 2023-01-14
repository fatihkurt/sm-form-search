import { Outlet, Link } from "react-router-dom";
import { SearchForm } from "../../sections";

export default function Main() {
  return (
    <>
      <div id="sidebar">
        <div>
          <SearchForm />
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
