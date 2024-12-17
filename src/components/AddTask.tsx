import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
/*import { Button } from '@/components/shared/button/Button'
import { FaCheckCircle, FaTimes } from 'react-icons/fa'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userIdSelector, userState } from '@/store/atoms/userAtom'*/

export const AddTask = () => {
  return (
    <main className="flex items-center">
      <h1 className="text-3xl font-bold underline">Create New Task</h1>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">
            Create New Task
          </h2>
          <input></input>
        </div>
      </div>

      <div className="sm:col-span-4">
        <label
          htmlFor="username"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Username
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
              workcation.com/
            </div>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="janesmith"
              className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
