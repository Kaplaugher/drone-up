import { getXataClient } from "@/xata";
import React from "react";
import FolderForm from "./FolderForm";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const schema = z.object({
  name: z.string().min(3),
});

async function DashboardPage() {
  const { userId } = auth();
  const xataClient = getXataClient();
  if (!userId) {
    redirect("/");
  }
  const folders = await xataClient.db.folders.filter({ userId }).getMany();

  async function createFolder(formData: FormData) {
    "use server";
    if (!userId) {
      return;
    }
    const parsedForm = schema.parse({
      name: formData.get("name"),
    });
    const newRecord = { ...parsedForm, userId: userId };
    await xataClient.db.folders.create(newRecord);
    revalidatePath("/");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {folders.map((folder) => (
        <div key={folder.id}>{folder.name}</div>
      ))}
      <FolderForm handleCreateFolder={createFolder} />
    </div>
  );
}

export default DashboardPage;
