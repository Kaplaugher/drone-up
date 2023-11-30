import { getXataClient } from "@/xata";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  userId: z.string(),
});

export default function FolderForm() {
  const { userId } = auth();
  async function createFolder(formData: any) {
    "use server";
    if (!userId) return;
    const parsedForm = schema.parse({
      name: formData.get("name"),
      userId,
    });
    const xataClient = getXataClient();
    const newRecord = { ...parsedForm, userId };
    await xataClient.db.folders.create(newRecord);
    revalidatePath("/");
  }
  return (
    <div>
      <form action={createFolder}>
        <div className="mt-2">
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#DD5829]  sm:text-sm sm:leading-6"
            placeholder="Walmart 1234"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#DD5829]  hover:bg-indigo-700 focus:outline-none mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
