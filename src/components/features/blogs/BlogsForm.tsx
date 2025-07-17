// app/blogs/new/page.tsx
"use client";

import { createBlogPost } from "@/actions/blogs.action";
import { useState, FormEvent } from "react";

export default function BlogsForm({ users }: any) {
  console.log("first", users);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState(""); // Replace with actual author ID
  const [status, setStatus] = useState(false); // Replace with actual author ID

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createBlogPost({ title, slug, content, authorId, status });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border px-3 py-2 w-full rounded"
        required
      />
      <input
        type="text"
        placeholder="Slug"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="border px-3 py-2 w-full rounded"
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border px-3 py-2 w-full rounded"
        rows={6}
        required
      />
      {/* <input
        type="text"
        placeholder="Author ID"
        value={authorId}
        onChange={(e) => setAuthorId(e.target.value)}
        className="border px-3 py-2 w-full rounded"
        required
      /> */}
      <select
        name="users"
        id="users"
        value={authorId}
        onChange={(e) => setAuthorId(e.target.value)}
        className="border px-3 py-2 w-full rounded"
        required
      >
        <option value="">-- Author --</option>
        {users.map((item: any) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      <label
        htmlFor="published"
        className="border px-2 py-1 rounded flex items-center gap-2"
      >
        <input
          type="checkbox"
          checked={status}
          onChange={(e) => setStatus(e.target.checked)}
        />
        {"  "}
        Published :{" "}
        <span className={status ? "text-green-600" : "text-red-600"}>
          {status ? "Published" : "Draft"}
        </span>
      </label>

      <br />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Create Blog
      </button>
    </form>
  );
}
