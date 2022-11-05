import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { API } from '../../services/clientApi';
import { useNavigate, useParams } from "react-router-dom";


import { ButtonWrapper, Container, MovieMainContainer } from './styles';

interface IMovieFullType {
    director: string;
    id: string;
    image: string;
    original_title: string;
    release_date: string;
    title: string;
    movie_banner: string;
    producer: string;
    running_time: string;
    rt_score: string;
    description: string;
}

const MoviesDetails: React.FC = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<IMovieFullType>()
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate('/')
    }

    useEffect(() => {
        API.get(`/movies/${id}`).then(res => {
            setMovie(res.data.movie)
            console.log(res.data.movie)
        }).catch(e => {
            console.log(e)
        })
    }, [])

    return (
        <Container>
            <Header />

            <MovieMainContainer>
                <img src={movie?.image} alt={movie?.title} />
                <div>
                    <h2>{movie?.title}</h2>
                    <h4>{movie?.original_title}</h4>
                    <p>
                        {movie?.description}
                    </p>
                </div>
            </MovieMainContainer>

            <ButtonWrapper>
                <button onClick={handleGoBack}>
                    Voltar
                </button>
            </ButtonWrapper>

        </Container>
    )
}

export default MoviesDetails;