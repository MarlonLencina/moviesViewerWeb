import React, { useEffect, useMemo, useState } from 'react';
import PaginationButton from '../paginationButton';

import { Container } from './styles';

interface IPaginationProps {
    totalCountOfRegisters?: number;
    onPageChange(page: number): void;
    registersPerPage?: number;
    currentPage: number;
}


const Pagination: React.FC<IPaginationProps> = ({
    onPageChange,
    totalCountOfRegisters = 0,
    registersPerPage = 10,
    currentPage
}) => {

    const pages = useMemo(() => {

        const numberOfPages = Math.ceil(totalCountOfRegisters / registersPerPage)

        /* const pages = new Array(numberOfPages).fill('').map((_, idx) => idx + 1)

        console.log(pages)
        setNumberOfPagesGroup(pages)
 */
        return new Array(numberOfPages).fill('').map((_, idx) => idx + 1)

    }, [])

    return (
        <Container>
            {pages.map(page => {
                console.log(page)
                return (
                    <PaginationButton
                        isSelected={currentPage === page}
                        onClick={() => onPageChange(page)}
                        key={page}
                        numberOfThePage={page} />
                )
            })}
        </Container>
    )
}

export default Pagination;