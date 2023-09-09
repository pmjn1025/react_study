import { useState, useEffect } from 'react'

// npm i prop-types 설치하기
function AppEffect() {
  const [counter, setValue] = useState(0)
  const onClick = () => {
    setValue((prev) => prev + 1)
  }

  // rendering이 두번되는 현상이 있어서 찾아보았더니 index.js에
  // React.StrictMode 테그에 감싸져 있어서 그렇다고 합니다.
  // StrictMode는 create-react-app로 설치했을 때 기본적으로 생성되는 테그로,
  // 해당 테그로 감싸져 있는 경우 자손까지 검사한다해서 두 번 실행된다고 합니다.
  // React.StrictMode 테그를 지우시고 해보세요.
  // 오류 : Error handling response: TypeError: Cannot read properties of undefined (reading 'always')
  // ==> 드래그프리때문

  // 1. 지금 아래와 같이 처음에 api를 호출하고 또 state가 변경될 때 또 호출하게 된다.
  // 처음 들어왔을때 한번만 실행 시키고 state값이 변경되도 호출하지 않게하고 싶다.
  console.log('i run all the time')
  //   const iRunOnlyOnce = () => {
  //     console.log('i run only once')
  //   }
  // React.useEffect() --> 첫번째 매개변수는 처음 한번만 실행시키고 싶은 코드, 두번째는 deps 추후 설명
  //useEffect(iRunOnlyOnce, [])
  useEffect(() => {
    console.log('i run only once')
  }, [])
  return (
    <div>
      <h1>AppEffect{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  )
}

export default AppEffect
