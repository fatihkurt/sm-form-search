import { createBrowserRouter } from "react-router-dom";
import { AddCategoryPage, AddUserPage, MainPage, SearchListPage } from "./pages";
import { Error } from "./sections";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <Error />,
    children: [
      {
        path: "user/new",
        element: <AddUserPage />,
        errorElement: <Error />,
      },
      {
        path: "category/new",
        element: <AddCategoryPage />,
        errorElement: <Error />,
      },
      {
        path: "search",
        element: <SearchListPage />,
        errorElement: <Error />,
      },
    ],
  },
]);

export default router;
