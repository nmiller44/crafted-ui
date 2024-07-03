import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { ButtonBase } from './button';

export const Modal = (props: any) => {
    const cancelButtonRef = useRef(null);

    const children = props.children;
    const setShow = props.setShow;
    const title = props.title || "Modal Dialog Box";
    const subtitle = props.subtitle;
    const buttonName = props.buttonName || "Ok";
    const buttonType = props.buttonType || "button";
    const buttonSubmit = props.buttonSubmit;

    return (
        <Transition.Root show={props.show} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setShow(false)}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                <PlusCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    { title }
                                </Dialog.Title>
                                <div className="mt-2">
                                { !!subtitle &&
                                    <p className="text-sm text-gray-500">
                                        { subtitle }
                                    </p>
                                }
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="px-5">
                            { children }                      
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <ButtonBase
                                id={`btn-modal-ok`}
                                type={buttonType}
                                onClick={buttonSubmit}
                                className="ml-3"
                                color="green"
                            >
                            { buttonName }
                            </ButtonBase>
                            <ButtonBase
                                id={`btn-modal-cancel`}
                                type="button"
                                color="white"
                                onClick={() => setShow(false)}
                                btnRef={cancelButtonRef}>
                                Cancel
                            </ButtonBase>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition.Root>
    )
}

export const ModalBase = (props: any) => {
    const cancelButtonRef = useRef(null);

    const children = props.children;
    const setShow = props.setShow;
    const dismiss = props.dismiss || true;

    return (
        <Transition.Root show={props.show} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setShow(false)}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="px-5">
                            { children }                      
                        </div>
                        { dismiss &&
                            <div className="absolute right-3 top-3">
                                <button type="button" 
                                        onClick={() => setShow(false)}
                                        className="text-gray-400 bg-transparent hover:hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:text-white" 
                                        data-modal-hide="default-modal"
                                        >
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                        }
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition.Root>
    )
}