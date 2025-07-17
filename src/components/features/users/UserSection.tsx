import { UserCard } from "./UserCard";

export default function UserSection({ data }: any) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data?.map((user: any) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          role={user.role}
          createdAt={user.createdAt.toString()}
        />
      ))}
    </section>
  );
}
