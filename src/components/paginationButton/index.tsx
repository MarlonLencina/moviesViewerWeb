import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IPaginationBtnProps extends   ButtonHTMLAttributes<HTMLButtonElement> {
    numberOfThePage: number;
    isSelected: boolean;
}

const PaginationButton: React.FC<IPaginationBtnProps> = ({
    numberOfThePage,
    isSelected,
    ...props
}) => {
    return (
        <Container
        disabled={isSelected}
        isSelected={isSelected}
        {...props}>
            <p>{numberOfThePage}</p>
        </Container>
    )
}

export default PaginationButton;