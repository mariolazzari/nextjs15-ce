import { User } from "@/types/User";

async function UsersServerPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Error fetching users");
  }
  const data: User[] = await res.json();

  return (
    <>
      <h1>Users server side fetching</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </>
  );
}

export default UsersServerPage;
