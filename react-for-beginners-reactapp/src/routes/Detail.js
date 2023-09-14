// MovieHome에서 <Link to={`/movie/${id}`}>{title}</Link> 작성을 했을때
// 부모 컴포넌트의 path="/movie:id" :id라고 입력한 부분이 Detail페이지넘기면서 데이터를 넘겨주는데
// Detailpage에서 어떻게 id부분만 받을 수 있나?
// 아래와 같이 useParams를 사용하자.

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  //  path="/movie/:id" 경로 사이에는 항상 "/"이거 붙여야 한다.
  // :variable 즉 :뒤에가 변수이다.
  //   const id = useParams()
  //   console.log(id.id)

  //이 형식의 코드는 현재 라우트의 URL 매개변수를 가져오는 데 사용된다.
  // URL이 "/movies/53528"일 때, useParams를 사용하여 id 값을 추출할 때 아래와 같은 형식의 코드로 가져올수있다.
  const { id } = useParams()
  console.log(id)
  // https://yts.mx/api/v2/movie_details.json?movie_id=

  const getMovieDetail = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
    )
    const json = response.json()

    console.log(json)
  }

  useEffect(() => {
    getMovieDetail()
  }, [])
  return <h1>Detail</h1>
}

export default Detail
