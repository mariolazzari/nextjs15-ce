import { User } from "@/types/User";

type AuthorProps = {
  id: number;
};

async function Author({ id }: AuthorProps) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: User = await res.json();

  return (
    <>
      <h3>
        Written by {user.name} {user.email}
      </h3>
    </>
  );
}

export default Author;
