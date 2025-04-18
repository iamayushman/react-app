import { useActionState } from "react";

async function increment(prev: number, formData: FormData) {
  console.log(formData.get("username"), prev);
  await new Promise((res) => setTimeout(res, 1_000));
  return prev + 1;
}

export default function ActionForm1() {
  const [state, action, isPending] = useActionState(increment, 0);
  return (
    <form>
      {isPending ? <h1>Loading</h1> : <></>}
      <input type="text" name="username" />
      {state}{" "}
      <button disabled={isPending} formAction={action}>
        CLICK
      </button>
    </form>
  );
}
