import { prisma } from "@/lib/prisma";
import { UserCard } from "@/components/features/users/UserCard";

export default async function page({ params }: any) {
  const user: any = await prisma?.users.findUnique({
    where: { id: params.id },
  });

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
