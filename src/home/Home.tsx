import { Link, Outlet } from "react-router";

export default function Home() {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/users"}>Users</Link>
      <Outlet />
    </>
  );
}
