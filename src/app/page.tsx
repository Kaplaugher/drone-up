import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");

  return (
    <main className="">
      <h1>hello</h1>
    </main>
  );
}
