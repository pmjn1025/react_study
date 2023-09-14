import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieHome from '../src/routes/MovieHome'
import Detail from './routes/Detail'

// react-router사용할 건데 터미널에 npm install react-router-dom을 입력한다.
// movieApp.js는 더이상 영화를 보여주지 않고 router를 render한다.
// 즉 이곳은 url을 바라보면서 해당 url주소에 따라서 MovieHome, Details 보여줄것이다.
function MovieApp() {
  //react-router-dom 5버전 -> 버전6 바뀐 부분
  // 1. Switch컴포넌트가 Routes컴포넌트로 대체되었습니다.
  // Switch -> Routes
  // 2. Route컴포넌트 사이에 자식 컴포넌트를 넣지 않고, element prop에 자식 컴포넌트를 할당하도록 바뀌었습니다.
  // <Routes>가 하는 일은 Route를 찾는데 Route는 url이다.
  // HashRouter는 주소 앞에 #를 붙여서 사용한다. 대부분 BrowserRouter를 사용하기 때문에 참고만 하자.

  // Movie 컴포넌트에서 타이틀을 클릭해서 movie페이지로 이동할때 a herf='' 로 이동하게 되면 우리 어플리케이션에 있는 모든 페이지가 리프레시 된다.
  // 딱 movie페이지만 렌더링, 리렌더링 되기를 원하는데, 이때 Link를 사용한다.  다시 Movie.js에서 보기

  //path="/movie/:id" :id라고 입력해야 페이지넘기면서 데이터를 전달할 수 있다.
  // 다시한번  path="/movie/:id" 경로 사이에는 항상 "/"이거 붙여야 한다.
  // :variable 즉 :뒤에가 변수이다.
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<MovieHome />}></Route>
      </Routes>
    </Router>
  )
}

export default MovieApp
