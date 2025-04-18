import "./App.css";
import { useRoutes } from "react-router";
import Home from "./home/Home";
import NotFound from "./components/errors/NotFound";

export default function App() {
  const routes = useRoutes([
    {
      path: "/",
      Component: Home,
    },
    {
      path: "*",
      Component: NotFound,
    },
  ]);
  return <>{routes}</>;
}
