import React from "react";
import Header from "../../components/Header/Header";
<<<<<<< HEAD
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Cast from "../../components/Cast/Cast"
import MovieCard from "../../components/MovieCard/MovieCard";
import { api_key } from "../../constants/apiKey";
import { goToMovieDetailPage } from "../../routes/Coordinator";
=======
>>>>>>> 2f53440191951cc75810a53c9dfa7ebcfb0ccb05

import {
    buildStyles,
    CircularProgressbar
  } from 'react-circular-progressbar'

import { CastContainer,
    OverviewContainer,
    Title,
    TopContainer,
    TrailerContainer,
    Recommendations,
    RecommendationsContainer,
    MoviePoster,
    CastMenu,
    MoviePosterContainer,
    MovieDetailContainer,
    Trailer,
    Assessment

 } from "./styled";
import { CenterFocusStrong } from "@mui/icons-material";


const MovieDetailPage = () => {

    const navigate = useNavigate()
  
    const [movieDetails, setMovieDetails] = useState({})
    const [genres, setGenres] = useState([])
    const [movieYear, setMovieYear] = useState("")
    const [movieCast, setMovieCast] = useState([])
    const [movieTrailerLink, setMovieTrailerLink] = useState("")
    const [recommendationList, setRecommendationList] = useState([])
  
    const pathParams = useParams()
  
  
    const getMovieDetail = async () => {
      try {
        const res = await axios
          .get(`https://api.themoviedb.org/3/movie/${pathParams.id}?${api_key}&language=pt-BR`)
        setMovieDetails(res.data)
        setGenres(res.data.genres)
        setMovieYear(res.data.release_date)
  
      } catch (error) { console.log(error) }
    }
  
    const {vote_average} = movieDetails

    const getCast = async () => {
      try {
        await axios
          .get(`https://api.themoviedb.org/3/movie/${pathParams.id}/credits?${api_key}&language=pt-BR`)
          .then((res) => {
            let cast = []
            let credits = res.data.cast
  
            for (let i = 0; i < 10; i++) {
              cast.push(credits[i])
            }
  
            setMovieCast(cast)
          })
          .catch((err) => { console.log(err) })
  
  
      } catch (error) { console.log(error) }
    }
  
  
    const getMovieTrailerLink = async () => {
      try {
        const res = await axios
          .get(`https://api.themoviedb.org/3/movie/${pathParams.id}/videos?${api_key}&language=pt-BR`)
        setMovieTrailerLink(res.data.results[0].key)
  
      } catch (error) { console.log(error) }
    }
  
  
    const getRecommendationList = () => {
      axios
        .get(`https://api.themoviedb.org/3/movie/${pathParams.id}/recommendations?${api_key}&language=pt-BR&page=1`)
        .then((res) => {
          let recommendations = []
          let movies = res.data.results
  
          for (let i = 0; i < 5; i++) {
            recommendations.push(movies[i])
          }
  
          setRecommendationList(recommendations)
        })
        .catch((err) => { console.log(err) })
    }
  
  
    useEffect(() => {
      getMovieDetail()
      getCast()
      getMovieTrailerLink()
      getRecommendationList()
    }, [pathParams.id])
  
  
    const poster = `https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`
  
    let percentage = (vote_average / 100) * 10

    const movieGenres = (genres.length > 0) ?
      movieDetails.genres.map((genre) => {
        return (
          ` ${genre.name}`
        )
      }) : "Carregando..."
  
  
    const castlist = (movieCast.length > 0) ?
      movieCast.map((person) => {
        const path = `https://image.tmdb.org/t/p/w200${person.profile_path}`
  
        return (
          <Cast key={person.id} id={person.id}
            path={path}
            name={person.name}
            character={person.character}
          />
        )
      }) : <h1>Nenhum filme encontrado</h1>
  
  
    const movieTrailer = (movieTrailerLink.length > 0) ?
      <Trailer src={`https://www.youtube.com/embed/${movieTrailerLink}`} title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Trailer> :
      <h2>Não foi possível carregar o trailer</h2>
  
      
    const recommendation = (recommendationList.length > 0) ?
      recommendationList.map((movie) => {
        const poster = `https://image.tmdb.org/t/p/w200${movie.poster_path}`
  
        return (
          <MovieCard key={movie.id}
            id={movie.id}
            poster={poster}
            title={movie.title}
            releaseDate={movie.release_date}
            goToMovieDetailPage={() => goToMovieDetailPage(navigate, movie.id)}
          />
        )
      }) : <h1>Nenhum filme encontrado</h1>
  
  
    return (
<<<<<<< HEAD
      <div>
        <Header />
        <MovieDetailContainer>
          <MoviePosterContainer>
            <MoviePoster src={poster} alt="" />
          </MoviePosterContainer>
          <TopContainer>
            <Title>
              {(movieYear.length > 0) ? `${movieDetails.title} (${movieYear.slice(0, 4)})` : "Carregando..."}
            </Title>
            <p>{`${movieDetails.release_date}`}</p>
            <p>{`Tipo: ${movieGenres}`}</p>
            <p>{`Duração: ${movieDetails.runtime} min`}</p>
          </TopContainer>
=======
        <Header/>
    )
}
>>>>>>> 2f53440191951cc75810a53c9dfa7ebcfb0ccb05


          <Assessment>
            <div style={{ width: 50,
                 height: 50,
                 }}>
           <CircularProgressbar
                value={percentage}
                maxValue={1}
                text={`${vote_average * 10}%`}
                styles={buildStyles({
                  rotation: 0.5 + (1 - percentage / 100) / 2,
                  pathColor: '#14FF00',
                  textColor: '#14FF00',
                  trailColor: '#FFFFFF',
                  backgroundColor: '#14FF00',
                })}
              />
            </div>
            <p>
              Avaliação dos usuários
            </p>
          </Assessment>


          <OverviewContainer>
            <h3>Sinopse</h3>
            <p>{movieDetails.overview}</p>
          </OverviewContainer>
        </MovieDetailContainer>
  
  
        <CastContainer>
          <h2>Elenco original</h2>
          <CastMenu>
            {castlist}
          </CastMenu>
        </CastContainer>
  
        <TrailerContainer>
          <h2>Trailer</h2>
          {movieTrailer}
        </TrailerContainer>
  
        <RecommendationsContainer>
          <h2>Recomendações</h2>
          <Recommendations>
            {recommendation}
          </Recommendations>
        </RecommendationsContainer>
      </div>
    )
  }
  
  export default MovieDetailPage