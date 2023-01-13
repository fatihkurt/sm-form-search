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
        errorElement: <ErrorPage />,
      },
      {
        path: "category/new",
        element: <AddCategoryPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "search/:term",
        element: <SearchListPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
