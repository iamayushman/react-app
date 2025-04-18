import { useActionState } from "react";

interface LoginForm {
  username: string;
  password: string;
}

async function submitAction(state: LoginForm, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  console.log(username, password);

  return { ...state, username, password };
}

const init: LoginForm = {
  username: "",
  password: "",
};

export default function Login() {
  const [form, formAction] = useActionState(submitAction, init);
  return (
    <div>
      <h1>Login</h1>
      <form action={formAction}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" defaultValue={form.username} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" defaultValue={form.password} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
