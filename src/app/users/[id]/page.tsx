import { prisma } from "@/lib/prisma";
import UserSection from "@/components/features/users/UserSection";
import { UserCard } from "@/components/features/users/UserCard";

export default async function page({ params }: any) {
  const user: any = await prisma?.users.findUnique({
    where: { id: params.id },
  });

  console.log("user: ", user);
  return (
    <div>
      <UserCard
        isLink={false}
        key={user.id}
        id={user.id}
        name={user.name}
        email={user.email}
        role={user.role}
        createdAt={user.createdAt?.toString()}
      />
    </div>
  );
}
