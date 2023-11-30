import Projects from "@/components/Projects";
import { getXataClient } from "@/xata";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

async function ProjectsPage() {
  const { userId } = auth();
  const xataClient = getXataClient();
  if (!userId) {
    redirect("/sign-in");
  }
  const projects = await xataClient.db.folders.filter({ userId }).getMany();

  return (
    <div>
      <Projects projects={projects} />
    </div>
  );
}

export default ProjectsPage;
