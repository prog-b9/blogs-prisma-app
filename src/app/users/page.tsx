import { prisma } from "@/lib/prisma";
import UserSection from "@/components/features/users/UserSection";

export default async function page() {
  const users = await prisma?.users.findMany();

  return (
    <div className="p-10">
      <div className="text-3xl">users</div>
      <div className="h-10"></div>
      <UserSection data={users} />
    </div>
  );
}
