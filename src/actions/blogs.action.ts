"use server";

import { prisma } from "@/lib/prisma"; // Adjust if path differs
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface CreateBlogPostParams {
  title: string;
  slug: string;
  content: string;
  authorId: string;
  status: boolean;
}

export async function createBlogPost(data: CreateBlogPostParams) {
  await prisma.blogPost.create({
    data: {
      title: data.title,
      slug: data.slug,
      content: data.content,
      authorId: data.authorId,
      published: data.status,
    },
  });

  revalidatePath("/blogs");
  redirect("/blogs"); // Redirect to blogs list page after creation
}
