
import { CgLoadbarSound } from "react-icons/cg";
import { TfiMedallAlt } from "react-icons/tfi";
import { GrDocument } from "react-icons/gr";

const Sidebar = () => {
  return (
    <>
        <aside className="w-1/5 bg-white shadow-md">
        <div className="p-4 text-xl font-bold text-black">WhatBytes</div>
        <nav className="mt-6 space-y-4">
          <a
            href="#"
            className="flex items-center py-2 px-4 text-gray-600 text-sm font-semibold hover:bg-gray-200"
          >
            <CgLoadbarSound className="mr-2" /> <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 text-gray-600 text-sm font-semibold hover:bg-gray-200 rounded-lg"
          >
            <TfiMedallAlt className="mr-2" />
            <span>Skill Test</span>
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 text-gray-600 text-sm font-semibold hover:bg-gray-200"
          >
            <GrDocument className="mr-2" />
            <span>Internship</span>
          </a>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
