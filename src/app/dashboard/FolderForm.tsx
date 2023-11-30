"use client";
import React, { useRef } from "react";

function FolderForm({ handleCreateFolder }: { handleCreateFolder: any }) {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div>
      <form
        ref={ref}
        action={(formData) => {
          handleCreateFolder(formData);
          ref.current?.reset();
        }}
      >
        <div className="mt-2">
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Dingle"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FolderForm;
