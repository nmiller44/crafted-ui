export type ModalProps = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    dismiss?: boolean;
    children: React.ReactNode;
}

export type ModalHeaderProps = {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}

export type ModalPaneProps = {
    children?: React.ReactNode;
}

export type ModalButtonBarProps = {
    children?: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
    const show = props.show;
    const setShow = props.setShow;

    const children = props.children;
    const dismiss = props.dismiss || true;

    return (
        <div>
          { show ? (
                <div className="relative z-10" aria-labelledby="crafted-modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                { dismiss &&
                                    <div className="absolute right-3 top-3">
                                        <button type="button" 
                                                onClick={() => setShow(false)}
                                                className="text-neutral-400 bg-transparent hover:hover:text-neutral-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:text-white" 
                                                data-modal-hide="default-modal"
                                                >
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                }

                                { children }
                                
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export const ModalHeader = (props: ModalHeaderProps) => {
    const title = props.title;
    const subtitle = props.subtitle || "";
    const children = props.children;

    return (
        <div className="bg-white p-4 pl-6 pt-5 text-lg font-semibold text-neutral-800 dark:text-white">
            { !!title &&
                <h3     id="crafted-modal-title"
                        className="text-lg font-semibold leading-6 text-neutral-900">
                    { title }
                </h3>
            }
            { !!subtitle &&
                <p className="mt-2 text-sm text-neutral-500">
                    { subtitle }
                </p>
            }

            { children }
        </div>
    )
}

export const ModalPane = (props: ModalPaneProps) => {
    const children = props.children;
    
    return (
        <div className="bg-white p-6 pb-4">
            <div>
                { children }
            </div>
        </div>
    )
}

export const ModalButtonBar = (props: ModalButtonBarProps) => {
    const children = props.children;

    return (
        <div className="bg-gray-50 px-6 py-3">
            { children }
        </div>
    )
}