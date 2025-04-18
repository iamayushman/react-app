import { Link } from "react-router";
import useGet from "../components/hooks/useGet";
import { User } from "../components/types/user";

export default function Users() {
  const users = useGet<User[]>("/users");
  return (
    <div>
      <h2>Users</h2>
      <div style={{ textAlign: "start" }}>
        {users?.map((user) => (
          <li key={user.id}>
            <Link to={"/users/" + user.id}>{user.name}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}
