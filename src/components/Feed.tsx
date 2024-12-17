import React from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

export const Feed = () => {
  return (
    <main className="pt-8 px-8 pb-4 flex flex-col items-center justify-center w-full gap-1">
      <h1 className="text-5xl font-semibold mb-8">To Do List</h1>
      <button className="flex items-center gap-1 mb-3 hover:underline">
        <span className="text-xl font-bold">New Task</span>
        <FaRegPlusSquare className="size-8" />
      </button>

      <div className="task-container flex flex-col gap-5 w-full justify-center items-center">
        <div className="flex flex-row gap-3 items-center border-black border rounded-lg w-1/2 py-2 px-4">
          <MdCheckBoxOutlineBlank className="size-8" />
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold">Task Title</h3>
            <h4 className="text-xl">task description</h4>
          </div>
        </div>

        <div className="flex flex-row gap-3 items-center border-black border rounded-lg w-1/2 py-2 px-4">
          <MdCheckBox className="size-8" />
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold">Task Title</h3>
            <h4 className="text-xl">task description</h4>
          </div>
        </div>
      </div>
    </main>
  );
};
