import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "首頁", href: "/" },
  { name: "關於我們", href: "#" },
  { name: "聯絡信息", href: "#" },
  { name: "菜單介紹", href: "menu" },
];

export default function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (item) => {
    setMobileMenuOpen(false);
    props.onClick(item.name);
  };
  return (
    <header className="animate-fade-down">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <button
          className="lg:hidden text-xl py-4 px-2 font-semibold leading-6 border rounded"
          onClick={() => alert("Coming Soon!")}
        >
          {"立即訂購"}
        </button>
        <div className="flex lg:flex-1"></div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => props.onClick(item.name)}
              className="text-xl font-semibold leading-6 "
            >
              {item.name}
            </a>
          ))}
        </div>
        <button
          className="hidden lg:flex text-xl py-4 ml-12 px-2 font-semibold leading-6 border rounded"
          onClick={() => alert("Coming Soon!")}
        >
          {"立即訂購"}
        </button>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="-m-1.5 p-1.5"></div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleClick(item)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
