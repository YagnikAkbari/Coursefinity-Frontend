import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function DropDown({ main, subHeading, subMenu }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full capitalize justify-center gap-x-[.1rem] rounded-md bg-white px-3 py-2 text-sm font-semibold ">
          {main}
          <ChevronDownIcon
            className="-mr-1 mt-[0.1rem] h-5 w-5 text-black"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -left-[2rem] z-10 mt-3 w-[268px] origin-top-right rounded-md bg-tranparent backdrop-blur-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden ">
          <div>
            <Menu.Item>
              {({ active }) => (
                <div
                  href="#"
                  className={`block px-4 py-4 text-sm uppercase bg-[#6E2AA3] text-white`}
                >
                  {subHeading}
                </div>
              )}
            </Menu.Item>
            {subMenu.map((text) => {
              return (
                <Menu.Item key={text}>
                  {({ active }) => (
                    <div>
                      <a
                        href="/"
                        className={`${
                          active ? "text-gray-900" : "text-gray-700"
                        } block px-4 py-2 text-sm`}
                      >
                        {text}
                      </a>
                    </div>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropDown;
