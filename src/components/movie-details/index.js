import React from 'react'
import { useState, useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios'
import './style.css'

export default function MovieDetails() {
  const [input, setInput] = useState('')
  const [movies, setMovies] = useState([])
  const [movieDetail, setMovieDetail] = useState({})
  /**
   * [
   *    {value: 1, label: 'title 1'},
   *    {value: 37, label: 'title 2'},
   * ]
   */
  const fetchMovieDetails = (movieId) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?&api_key=cfe422613b250f702980a3bbf9e90716`,
      )
      .then((res) => {
        setMovieDetail(res.data)
      })
  }
  useEffect(() => {
    fetchMovieDetails(772)
  }, [])

  const onFormValueChange = (movieTitle) => {
    setInput(movieTitle)
    if (movieTitle) {
      // movieTitle.length > 0
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=cfe422613b250f702980a3bbf9e90716`,
        )
        .then((res) =>
          setMovies(
            res.data.results.map((movie) => {
              return {
                value: movie.id,
                label: movie.title,
              }
            }),
          ),
        )
    } else {
      setMovies([])
    }
  }

  return (
    <div
      className="big-container"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`,
      }}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.85) 15%,
                rgba(0, 0, 0, 0.2) 40%,
                #000 90%
              )`,
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
          paddingTop: 30,
        }}
      >
        <div className="movie-app-container">
          <div className="top-container">
            <div>
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="logo"
                  src="https://raw.githubusercontent.com/zisiszikos/the-movie-db-example/main/tmdb.png"
                  width="150px"
                />
              </a>
            </div>
            <Select
              className="selectoption"
              isSearchable={true}
              onChange={(option) => fetchMovieDetails(option.value)}
              options={movies}
              onInputChange={onFormValueChange}
              inputValue={input}
            />
          </div>
          <div className="movie-container">
            <img
              src={`https://image.tmdb.org/t/p/w400${movieDetail.poster_path}`}
              alt="Home Alone"
              width={400}
            />

            <div className="context">
              <div className="title">
                <b>{movieDetail.title}</b>
              </div>
              <br />
              <br />
              <div className="tag-line">{movieDetail.tagline}</div>
              <div className="movie-detail">{movieDetail.overview}</div>
              <br />
              <div className="genres">
                {movieDetail.genres?.map((genre, idx) => {
                  return `${genre.name}${
                    idx === movieDetail.genres.length - 1 ? '' : ', '
                  }`
                })}
              </div>
              <div>
                {movieDetail.production_companies?.map((comp, idx) => {
                  return `${comp.name}${
                    idx === movieDetail.production_companies.length - 1
                      ? ''
                      : ','
                  } `
                })}
              </div>
              <div className="small-detail-container">
                <div className="small-detail">
                  <span>Original Release:</span>
                  <span className="date green">{movieDetail.release_date}</span>
                </div>
                <div className="small-detail">
                  <span>Running Time:</span>
                  <span className="mins green">{movieDetail.runtime}mins</span>
                </div>
              </div>
              <div className="small-detail-container">
                <div className="small-detail">
                  <span>Box Office:</span>
                  <span className="revenue green">
                    {movieDetail.revenue?.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <div className="small-detail">
                  <span>Vote Average:</span>
                  <span className="rate green">
                    {movieDetail.vote_average}/10
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <pre>{JSON.stringify(movieDetail, null, 2)}</pre> */}
        </div>
      </div>
    </div>
  )
}
// linear-gradient(rgba(0,0,0,.85) 15%,rgba(0,0,0,.2) 40%,#000 90%);
