import { useRoutes } from "react-router";
import "./App.css";
import Login from "./auth/Login";
import NotFound from "./components/errors/NotFound";
import Home from "./home/Home";
import Profile from "./users/Profile";
import Users from "./users/Users";

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
          path: "/login",
          Component: Login,
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
