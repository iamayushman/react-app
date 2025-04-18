import { useParams } from "react-router";
import useGet from "../components/hooks/useGet";
import { User } from "../components/types/user";

export default function Profile() {
  const { id } = useParams();
  const user = useGet<User>("/users/" + id);
  return (
    <div>
      <h2>Users</h2>
      <div style={{ textAlign: "start" }}>
        {user?.name} - {user?.id}
      </div>
    </div>
  );
}
