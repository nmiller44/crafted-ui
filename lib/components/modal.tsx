import { Fragment, useRef } from 'react'
import { Dialog, DialogPanel, Transition } from '@headlessui/react'

export type ModalProps = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    dismiss?: boolean;
    children: React.ReactNode;
}

export type ModalHeaderProps = {
    title: string;
    subtitle?: string;
}

export const Modal = (props: ModalProps) => {
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
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-lg">
                            { children } 

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
                        </DialogPanel>
                    </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export const ModalHeader = (props: ModalHeaderProps) => {
    const title = props.title;
    const subtitle = props.subtitle || "";

    return (
        <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
                {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <PlusCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div> */}
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
    )
}

export const ModalPane = (props: any) => {
    
    return (
        <div className="p-4 min-h-80">
            { props.children }
        </div>
    )
}

export const ModalButtonBar = (props: any) => {
    return (
        <div className="p-4 sm:flex sm:flex-row-reverse sm:px-6">
            { props.children }   
        </div>
    )
}