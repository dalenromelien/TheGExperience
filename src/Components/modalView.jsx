import React from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const ModalView = ({ isOpen, closeModal, image }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-[0.8]" />
        </Transition.Child>
        <div onClick={closeModal} className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative   max-h-[90vh]  transform rounded-2xl   transition-all flex justify-center">
                <img
                  className=" object-contain"
                  onClick={closeModal}
                  src={image}
                  alt={image}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
