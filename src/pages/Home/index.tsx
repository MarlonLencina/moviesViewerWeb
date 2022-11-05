import React, { useEffect, useMemo, useState } from 'react';
import Header from '../../components/Header';
import MovieCard from '../../components/MovieCard';
import Pagination from '../../components/pagination';
import PaginationButton from '../../components/paginationButton';
import { API } from '../../services/clientApi';

import { Container, MoviesContainer, PaginationContainer, WrapperPaginationButton } from './styles';

export interface IMovieType {
    director: string;
    id: string;
    image: string;
    original_title: string;
    release_date: string;
    title: string;
}

export interface IDataMovies {
    list: IMovieType[];
    totalCountOfMovies: number;
}

const Home: React.FC = () => {

    const [totalCountOfMovies, setTotalCountOfMovies] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)

    const [moviesPaginated, setMoviesPaginated] = useState<IMovieType[]>([])

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const paginateMovies = (movies: IMovieType[]) => {

        setTotalCountOfMovies(movies.length)

        const startIndex = currentPage > 1 ? (currentPage - 1) * 10 : 0

        console.log(startIndex)
        setMoviesPaginated(movies.splice(startIndex, itemsPerPage))

    }

    useEffect(() => {
        API.get('/movies').then(res => {
            paginateMovies(res.data.movies)
        }).catch(e => {
            console.log(e)
        })
    }, [currentPage])


    return (
        <Container>
            <Header />

            <MoviesContainer>

                {
                    moviesPaginated.map(movie => {
                        return (
                            <MovieCard
                                id={movie.id}
                                image={movie.image}
                                title={movie.title}
                                key={movie.id}
                            />
                        )
                    })
                }

            </MoviesContainer>

            <PaginationContainer>
                {
                    totalCountOfMovies && (
                        <Pagination
                            currentPage={currentPage}
                            totalCountOfRegisters={totalCountOfMovies}
                            onPageChange={handlePageChange}
                        />
                    )
                }
            </PaginationContainer>


        </Container>
    )
}

export default Home;