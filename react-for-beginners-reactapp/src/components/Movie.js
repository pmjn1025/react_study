import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../MovieIntro.css' // 추가된 CSS 파일
// react-router사용할 건데 터미널에 npm install react-router-dom을 입력한다.
// Movie 컴포넌트에서 타이틀을 클릭해서 movie페이지로 이동할때 a herf='' 로 이동하게 되면 우리 어플리케이션에 있는 모든 페이지가 리프레시 된다.
// 딱 movie페이지만 렌더링, 리렌더링 되기를 원하는데, 이때 Link를 사용한다.
// MovieHome에서 id받아서 props에 넘겨주고 여기서 id값을 받아서 Link to로 연동한다.

// 여기서 <Link to={`/movie/${id}`}>{title}</Link> 작성을 해야,
// 부모 컴포넌트의 path="/movie:id" :id라고 입력한 부분이 페이지넘기면서 데이터를 전달할 수 있다.
function Movie({ id, medium_cover_image, title, summary, genres }) {
  // return (
  //   <div>
  //     <img src={medium_cover_image} alt={title}></img>
  //     <h2>
  //       <Link to={`/movie/${id}`}>{title}</Link>
  //     </h2>
  //     <p>{summary.slice(0, 300)}...</p>
  //     <ul>
  //       {genres.map((g) => (
  //         <li key={g}>{g}</li>
  //       ))}
  //     </ul>
  //   </div>
  // )
  return (
    <div className="movie-intro">
      <img className="movie-intro-image" src={medium_cover_image} alt={title} />
      <h2 className="movie-intro-title">
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p className="movie-intro-summary">{summary.slice(0, 300)}...</p>
      <ul className="movie-intro-genres">
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  )
}
// propTypes 선언하는것 잘보자
// 항상 소문자
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie
