import React from 'react';
import { Link } from "react-router-dom"

import { Container } from './styles';

interface IMovieProps {
    id: string;
    image: string;
    title: string;
}

const MovieCard: React.FC<IMovieProps> = ({
    id,
    title,
    image
}) => {
    return (
        <Container>
            <Link to={`/${id}`}>
                <img src={image} alt={title} />
            </Link>
        </Container>
    );
}

export default MovieCard;