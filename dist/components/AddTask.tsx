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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">
            Create New Task
          </h2>
          <input></input>
        </div>
      </div>
    </main>
  );
};
