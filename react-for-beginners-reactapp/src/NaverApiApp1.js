import { useEffect, useState } from 'react'

// 네이버 API가 CORS를 지원하지 않기 때문에, 클라이언트 측에서 직접 API 요청을 보내는 것은 불가능합니다.
// 서버를 통해서 api에 대한 값을 받아와야 함.
// 한참 찾았네.... 스프링 부트와 연동되어있는 폴더에서 계속....(react-project)
function NaverApiApp1() {
  useEffect(() => {
    fetch(
      'https://openapi.naver.com/v1/search/shop.xml?query="신발"&display=10&start=1&sort=sim',
      {
        method: 'GET',
        mode: 'cors', // 'no-cors' 가 아닌 'cors'로 설정합니다.
        headers: {
          'X-Naver-Client-Id': '0C6GvpW2lcJ9FBkJ_hvT',
          'X-Naver-Client-Secret': '6IHhXbO2v_',
        },
      },
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
      })
      .catch((e) => {
        // error in e.message
      })
  }, [])
  return <div>?????</div>
}

export default NaverApiApp1
