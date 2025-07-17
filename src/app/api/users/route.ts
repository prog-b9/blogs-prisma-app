// src/app/api/posts/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const posts = await prisma.users.findMany();
  return NextResponse.json(posts);
}

export async function POST() {
  const posts = await prisma.users.create({
    data: {
      email: "basil.m1",
      password: "Bb112233",
      name: "Basil Mohames",

      // posts     BlogPost[]
    },
  });
  return NextResponse.json(posts);
}
