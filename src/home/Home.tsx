import { Link, Outlet } from "react-router";

export default function Home() {
  return (
    <>
      {/* <ActionForm1></ActionForm1> */}
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/users"}>Users</Link>
      <br />
      <Link to={"/login"}>Login</Link>
      <Outlet />
    </>
  );
}
