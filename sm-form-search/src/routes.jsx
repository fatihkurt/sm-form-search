import { createBrowserRouter } from "react-router-dom";
import { AddCategoryPage, AddUserPage, ErrorPage, MainPage, SearchListPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "user/new",
        element: <AddUserPage />,
      },
      {
        path: "category/new",
        element: <AddCategoryPage />,
      },
      {
        path: "search/:term",
        element: <SearchListPage />,
      },
    ],
  },
]);

export default router;
