import "./App.css";
import { useRoutes } from "react-router";
import Home from "./home/Home";
import NotFound from "./components/errors/NotFound";
import Users from "./components/users/Users";
import Profile from "./components/users/Profile";

export default function App() {
  const routes = useRoutes([
    {
      path: "/",
      Component: Home,
      children: [
        {
          path: "/users",
          Component: Users,
        },
        {
          path: "/users/:id",
          Component: Profile,
        },
      ],
    },
    {
      path: "*",
      Component: NotFound,
    },
  ]);
  return <>{routes}</>;
}
