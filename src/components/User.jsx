import React from "react";
import FirstName from "./FirstName";
import LastName from "./LastName";

import {useDispatch} from "react-redux"
import { setFirstName , setLastName } from "../redux/slices/userSlice";

export default function User() {

  const dispath = useDispatch()

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="First Name"
        className="w-full px-4 py-3 mb-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all placeholder:text-gray-400 text-gray-700 shadow-sm"
      onChange={(e)=>dispath(setFirstName(e.target.value))}
     />
      <input
        type="text"
        placeholder="Last Name"
        className="w-full px-4 py-3 mb-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all placeholder:text-gray-400 text-gray-700 shadow-sm"
        onChange={(e)=>dispath(setLastName(e.target.value))}
      />
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <div className="text-sm font-medium text-gray-600 mb-1">
              First Name:
            </div>
            <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200">
              <FirstName />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-medium text-gray-600 mb-1">
              Last Name:
            </div>
            <div className="bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200">
              <LastName />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
