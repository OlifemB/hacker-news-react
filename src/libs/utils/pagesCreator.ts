interface CreatePagesProps {
    pages: number[],
    pagesCount: number,
    currentPage: number,
    pagesLimit?: number
}

export function createPages({pagesCount, currentPage, pages, pagesLimit = 10}: CreatePagesProps): void {
    if (pagesCount > pagesLimit) {
        if (currentPage > 5) {
            for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                pages.push(i)
                if (i === pagesCount)
                    break
            }
        } else {
            for (let i = 1; i <= pagesLimit; i++) {
                pages.push(i)
                if (i === pagesCount)
                    break
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}