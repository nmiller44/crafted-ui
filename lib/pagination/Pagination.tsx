import { classNames } from "~/utils";
import { Button } from "~/button";
import { IconChevronLeft, IconChevronRight } from "~/icons";

export type PaginationProps = React.ComponentProps<"nav"> & {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
    showInfo?: boolean;
}

export const Pagination = ({
    totalItems,
    itemsPerPage = 10,
    currentPage,
    onPageChange,
    siblingCount = 1,
    showInfo = true,
    className,
    ...props
}: PaginationProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    if (totalPages <= 1) return null;
    
    const range = (start: number, end: number) => {
        return Array.from({ length: end - start + 1 }, (_, idx) => start + idx);
    };
    
    const generatePagination = () => {
        const firstPage = 1;
        const lastPage = totalPages;
        
        const leftSiblingIndex = Math.max(currentPage - siblingCount, firstPage);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, lastPage);
        
        const shouldShowLeftDots = leftSiblingIndex > firstPage + 1;
        const shouldShowRightDots = rightSiblingIndex < lastPage - 1;
        
        const pageNumbers = [];
        
        if (firstPage < leftSiblingIndex) {
            pageNumbers.push(firstPage);
            if (shouldShowLeftDots) {
                pageNumbers.push('...');
            }
        }
        
        const siblingRange = range(leftSiblingIndex, rightSiblingIndex);
        pageNumbers.push(...siblingRange);
        
        if (rightSiblingIndex < lastPage) {
            if (shouldShowRightDots) {
                pageNumbers.push('...');
            }
            if (rightSiblingIndex !== lastPage) {
                pageNumbers.push(lastPage);
            }
        }
        
        return pageNumbers;
    };
    
    const pageNumbers = generatePagination();
    
    const maxDigits = totalPages.toString().length;
    const minWidth = maxDigits === 1 ? "min-w-[2.5rem]" : maxDigits === 2 ? "min-w-[3rem]" : "min-w-[3.5rem]";
    
    return (
        <div className={classNames("flex items-center justify-between border-t border-border py-3 px-4", className)}>
            {showInfo && (
                <div>
                    <p className="text-sm text-muted-foreground">
                        Showing <span className="font-medium">{Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)}</span> to{' '}
                        <span className="font-medium">{Math.min(currentPage * itemsPerPage, totalItems)}</span> of{' '}
                        <span className="font-medium">{totalItems}</span> results
                    </p>
                </div>
            )}
            <div></div>
            <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination" {...props}>
                        <Button
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            clr="blank"
                            className={classNames(
                                "rounded-l-md rounded-r-none border border-border bg-card px-2 py-2 shadow-none focus:ring-0 focus:ring-offset-0 focus:z-10 focus:bg-muted",
                                currentPage === 1 && "cursor-not-allowed opacity-50"
                            )}
                        >
                            <span className="sr-only">Previous</span>
                            <IconChevronLeft />
                        </Button>
                        
                        {pageNumbers.map((page, index) => {
                            if (page === '...') {
                                return (
                                    <span
                                        key={`ellipsis-${index}`}
                                        className="relative inline-flex items-center border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                                    >
                                        ...
                                    </span>
                                );
                            }
                            
                            return (
                                <Button
                                    key={`page-${page}`}
                                    onClick={() => onPageChange(Number(page))}
                                    aria-current={currentPage === page ? "page" : undefined}
                                    clr={currentPage === page ? "primary" : "blank"}
                                    className={classNames(
                                        "rounded-none border px-4 py-2 text-sm font-medium shadow-none focus:ring-0 focus:ring-offset-0 focus:z-10",
                                        minWidth,
                                        currentPage === page ? "border-primary focus:bg-primary/90" : "border-border bg-card focus:bg-muted"
                                    )}
                                >
                                    {page}
                                </Button>
                            );
                        })}
                        
                        <Button
                            onClick={() => onPageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            clr="blank"
                            className={classNames(
                                "rounded-l-none rounded-r-md border border-border bg-card px-2 py-2 shadow-none focus:ring-0 focus:ring-offset-0 focus:z-10 focus:bg-muted",
                                currentPage === totalPages && "cursor-not-allowed opacity-50"
                            )}
                        >
                            <span className="sr-only">Next</span>
                            <IconChevronRight />
                        </Button>
                    </nav>
                </div>
        </div>
    );
};
