import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "AllTasks", href: "/AllTasks"},
  { name: "Completed", href: "/Completed" },
  { name: "AddTask", href: "/AddTask" },
];

function MobileHeaderBar() {
  return (
    <Disclosure as="nav" className=" z-50 flex place-content-end absolute bg-[#181818]  right-10 top-10 rounded-md mt-1">
      {({ open }) => (
        <>
          {/* Mobile and tablet navigation */}
          <div className="">
            <div className="flex items-center  justify-between h-[50px]">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-start rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#436BF4]">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <Disclosure.Panel className="block ">
              <div className="pt-2 pb-3 space-y-1 ">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default MobileHeaderBar;
