import MainLayout from "../MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import ErrorPage from "../pages/ErrorPage";
import Notes from "../pages/Notes";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "profile/:user",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
