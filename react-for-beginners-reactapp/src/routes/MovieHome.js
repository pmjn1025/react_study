import { useEffect, useState } from 'react'
import Movie from '../components/Movie'
import '../MovieHome.css' // 추가된 CSS 파일

// react-router사용할 건데 터미널에 npm install react-router-dom을 입력한다.
function MovieHome() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  // async, await를 사용하자
  // https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
  const getMovies = async () => {
    const response = await fetch(
      //`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=rating&limit=20`,
      `https://yts.mx/api/v2/list_movies.json?sort_by=year&limit=21&page=2`,
    )
    const json = await response.json()
    setMovies((current) => json.data.movies)
    setLoading((current) => false)
  }

  useEffect(() => {
    getMovies()
  }, [])

  console.log(movies)

  return (
    <div>
      <h1>MovieApp</h1>
      <hr></hr>
      {loading ? (
        <h1>Loding...</h1>
      ) : (
        <div className="container">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default MovieHome
